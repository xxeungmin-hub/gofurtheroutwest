import { useCallback, useEffect, useRef, useState } from "react";
import "../styles/LogoVariationsSection.css";

const FRAME_RATE = 42;
const MAX_FRAME_EDGE = 640; // Reduce per-frame canvas work on high-density iMac screens.
const padFrame = (number) => String(number).padStart(5, "0");

const sequences = {
  zion: { count: 19, path: (i) => `/images/logo-sequence/zion/zion_${padFrame(i)}.png` },
  vegas: { count: 21, path: (i) => `/images/logo-sequence/vegas/vegas%20vic3_${padFrame(i)}.png` },
  route66: { count: 39, fps: 48, path: (i) => `/images/logo-sequence/route66/route66_${padFrame(i)}.png` },
  monument: { count: 15, path: (i) => `/images/logo-sequence/monument/monument_${padFrame(i)}.png` },
  blue: { count: 25, path: (i) => `/images/logo-sequence/blue/blue_${padFrame(i)}.png` },
  horseshoe: { count: 37, path: (i) => `/images/logo-sequence/horseshoe/horseshoe_${padFrame(i)}.png` },
  pioneer: { count: 17, path: (i) => `/images/logo-sequence/pioneer/pioneer_${padFrame(i)}.png` },
  death: { count: 46, path: (i) => `/images/logo-sequence/death/death_${padFrame(i)}.png` },
};

const logos = [
  { id: "zion", title: "Zion Canyon 3D logo" },
  { id: "vegas", title: "Vegas Vic 3D logo" },
  { id: "route66", title: "Route 66 3D logo" },
  { id: "monument", title: "Monument Valley 3D logo" },
  { id: "blue", title: "Blue Swallow Motel 3D logo" },
  { id: "horseshoe", title: "Horseshoe Bend 3D logo" },
  { id: "pioneer", title: "Pioneertown 3D logo" },
  { id: "death", title: "Death Valley 3D logo" },
];

// Limit decoding pressure across all eight logos (rather than 219 PNG decodes at once).
const decodeQueue = [];
let activeDecodes = 0;
const MAX_PARALLEL_DECODES = 3;
function scheduleDecode(task) {
  return new Promise((resolve, reject) => {
    decodeQueue.push({ task, resolve, reject });
    pumpDecodes();
  });
}
function pumpDecodes() {
  while (activeDecodes < MAX_PARALLEL_DECODES && decodeQueue.length) {
    const job = decodeQueue.shift();
    activeDecodes += 1;
    Promise.resolve().then(job.task).then(job.resolve, job.reject).finally(() => {
      activeDecodes -= 1;
      pumpDecodes();
    });
  }
}

async function decodeSmallFrame(url) {
  const img = new Image();
  img.decoding = "async";
  img.src = url;
  await img.decode();
  const scale = Math.min(1, MAX_FRAME_EDGE / Math.max(img.naturalWidth, img.naturalHeight));
  const width = Math.max(1, Math.round(img.naturalWidth * scale));
  const height = Math.max(1, Math.round(img.naturalHeight * scale));
  // Sized canvas copies release the oversized decoded source after this function returns.
  const frame = document.createElement("canvas");
  frame.width = width;
  frame.height = height;
  frame.getContext("2d", { alpha: false })?.drawImage(img, 0, 0, width, height);
  return frame;
}

function SequenceLogo({ id, title }) {
  const config = sequences[id];
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const currentRef = useRef(0);
  const directionRef = useRef(0);
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);
  const wantedRef = useRef(false);
  const startedRef = useRef(false);
  const mountedRef = useRef(true);
  const [ready, setReady] = useState(false);

  const paint = useCallback((index) => {
    const canvas = canvasRef.current;
    const frame = framesRef.current[index];
    if (!canvas || !frame) return;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;
    if (canvas.width !== frame.width || canvas.height !== frame.height) {
      canvas.width = frame.width;
      canvas.height = frame.height;
    }
    context.drawImage(frame, 0, 0);
  }, []);

  const tick = useCallback((time) => {
    rafRef.current = 0;
    if (!mountedRef.current || !directionRef.current) return;
    const fps = config.fps ?? FRAME_RATE;
    if (!lastTimeRef.current) lastTimeRef.current = time;
    const elapsed = time - lastTimeRef.current;
    if (elapsed >= 1000 / fps) {
      // Preserve the original frame-by-frame animation, including reverse on leave.
      const next = Math.max(0, Math.min(config.count - 1, currentRef.current + directionRef.current));
      if (!framesRef.current[next]) {
        // No stuttering from decoding an unavailable frame on the render thread.
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      currentRef.current = next;
      paint(next);
      lastTimeRef.current = time;
      if (next === 0 || next === config.count - 1) directionRef.current = 0;
    }
    if (directionRef.current) rafRef.current = requestAnimationFrame(tick);
  }, [config, paint]);

  const play = useCallback((direction) => {
    directionRef.current = direction;
    lastTimeRef.current = 0;
    if (!rafRef.current && direction) rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  useEffect(() => {
    mountedRef.current = true;
    let cancelled = false;
    const startLoading = async () => {
      if (startedRef.current) return;
      startedRef.current = true;
      try {
        // Get the resting logo on screen immediately, then prepare remaining frames.
        const first = await scheduleDecode(() => decodeSmallFrame(config.path(0)));
        if (cancelled) return;
        framesRef.current[0] = first;
        paint(0);
        for (let i = 1; i < config.count; i += 1) {
          if (cancelled) return;
          const frame = await scheduleDecode(() => decodeSmallFrame(config.path(i)));
          if (cancelled) return;
          framesRef.current[i] = frame;
        }
        setReady(true);
        if (wantedRef.current) play(1);
      } catch (error) {
        console.error(`Failed to prepare ${id} sequence`, error);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        startLoading();
        observer.disconnect();
      }
    }, { rootMargin: "450px 0px" });
    if (stageRef.current) observer.observe(stageRef.current);
    return () => {
      cancelled = true;
      mountedRef.current = false;
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      directionRef.current = 0;
      framesRef.current = [];
    };
  }, [config, id, paint, play]);

  return (
    <div className={`logo-variation-item logo-variation-item--${id}`}>
      <div className={`logo-sequence-stage logo-sequence-stage--${id}`} ref={stageRef}>
        <canvas
          ref={canvasRef}
          className={`logo-variation-image logo-variation-image--${id}`}
          role="img"
          aria-label={title}
        />
        <div
          className={`logo-sequence-hitarea logo-sequence-hitarea--${id}`}
          onPointerEnter={() => {
            wantedRef.current = true;
            if (ready) play(1);
          }}
          onPointerLeave={() => {
            wantedRef.current = false;
            if (ready) play(-1);
          }}
          aria-hidden="true"
        />
      </div>
      {!ready && <span className="logo-sequence-loading">Loading…</span>}
    </div>
  );
}

export default function LogoVariationsSection() {
  return (
    <section className="logo-variations-section" id="logo-variations">
      <div className="logo-variations-inner">
        <div className="logo-variations-heading">
          <h2 className="logo-variations-title">Logo Variations</h2>
          <p className="logo-variations-description">
            Eight places, eight identities.
            <br />
            각 장소의 고유한 분위기와 질감을 바탕으로 서로 다른 로고 형태와 재질을 전개했습니다.
          </p>
        </div>
        <div className="logo-variations-grid">
          {logos.map((logo) => (
            <SequenceLogo key={logo.id} id={logo.id} title={logo.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
