import { useEffect, useRef, useState } from "react";
import "../styles/LogoVariationsSection.css";

const FRAME_RATE = 42;
const padFrame = (number) => String(number).padStart(5, "0");

const sequences = {
  zion: {
    count: 19,
    path: (index) => `/images/logo-sequence/zion/zion_${padFrame(index)}.png`,
  },
  vegas: {
    count: 21,
    path: (index) => `/images/logo-sequence/vegas/vegas%20vic3_${padFrame(index)}.png`,
  },
 
route66: {
  count: 39,
  fps: 48,
  path: (index) =>
    `/images/logo-sequence/route66/route66_${padFrame(index)}.png`,
},
  

monument: {
  count: 15,
  path: (index) =>
    `/images/logo-sequence/monument/monument_${padFrame(index)}.png`,
},

blue: {
  count: 25,
  path: (index) =>
    `/images/logo-sequence/blue/blue_${padFrame(index)}.png`,
},


horseshoe: {
  count: 37,
  path: (index) =>
    `/images/logo-sequence/horseshoe/horseshoe_${padFrame(index)}.png`,
},

pioneer: {
  count: 17,
  path: (index) =>
    `/images/logo-sequence/pioneer/pioneer_${padFrame(index)}.png`,
},

death: {
  count: 46,
  path: (index) =>
    `/images/logo-sequence/death/death_${padFrame(index)}.png`,
},

};

const logos = [
  { id: "zion", title: "Zion Canyon 3D logo" },
  { id: "vegas", title: "Vegas Vic 3D logo" },
  { id: "route66", title: "Route 66 3D logo", image: "/images/logo-variations/route66.webp" },
  { id: "monument", title: "Monument Valley 3D logo", image: "/images/logo-variations/monument.webp" },
  { id: "blue", title: "Blue Swallow Motel 3D logo", image: "/images/logo-variations/blue.webp" },
  { id: "horseshoe", title: "Horseshoe Bend 3D logo", image: "/images/logo-variations/horseshoe.webp" },
  { id: "pioneer", title: "Pioneertown 3D logo", image: "/images/logo-variations/pioneer.webp" },
  { id: "death", title: "Death Valley 3D logo", image: "/images/logo-variations/death.webp" },
];

function SequenceLogo({ id, title }) {
  const config = sequences[id];
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameRef = useRef(0);
  const directionRef = useRef(0);
  const readyRef = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let animationId = 0;
    let lastFrameTime = 0;

    const draw = (index) => {
      const canvas = canvasRef.current;
      const image = imagesRef.current[index];
      if (!canvas || !image) return;
      const context = canvas.getContext("2d", { alpha: false });
      if (!context) return;
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };

    const tick = (now) => {
      const direction = directionRef.current;
      
if (direction !== 0 && now - lastFrameTime >= 1000 / (config.fps ?? FRAME_RATE)) {
        // Always advance one frame: never jump straight to the end after a delay.
        const next = Math.max(0, Math.min(config.count - 1, frameRef.current + direction));
        if (next !== frameRef.current) {
          frameRef.current = next;
          draw(next);
        }
        if (next === 0 || next === config.count - 1) directionRef.current = 0;
        lastFrameTime = now;
      } else if (direction === 0) {
        lastFrameTime = now;
      }
      animationId = requestAnimationFrame(tick);
    };

    const loadImages = async () => {
      try {
        const images = await Promise.all(
          Array.from({ length: config.count }, async (_, index) => {
            const image = new Image();
            image.src = config.path(index);
            await image.decode(); // Wait for decoding, not just downloading.
            return image;
          })
        );
        if (cancelled) return;
        imagesRef.current = images;
        const canvas = canvasRef.current;
        if (canvas) {
          canvas.width = images[0].naturalWidth;
          canvas.height = images[0].naturalHeight;
          draw(0);
        }
        readyRef.current = true;
        setReady(true);
        animationId = requestAnimationFrame(tick);
      } catch (error) {
        console.error(`Failed to prepare ${id} frames`, error);
      }
    };
    loadImages();
    return () => {
      cancelled = true;
      readyRef.current = false;
      cancelAnimationFrame(animationId);
    };
  }, [config, id]);

  return (
    <div className={`logo-variation-item logo-variation-item--${id}`}>
      <div className={`logo-sequence-stage logo-sequence-stage--${id}`}>
        <canvas
          ref={canvasRef}
          className={`logo-variation-image logo-variation-image--${id}`}
          role="img"
          aria-label={title}
        />
        <div
          className={`logo-sequence-hitarea logo-sequence-hitarea--${id}`}
          onPointerEnter={() => {
            if (readyRef.current) directionRef.current = 1;
          }}
          onPointerLeave={() => { directionRef.current = -1; }}
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
          {logos.map((logo) => sequences[logo.id] ? (
            <SequenceLogo key={logo.id} id={logo.id} title={logo.title} />
          ) : (
            <div key={logo.id} className={`logo-variation-item logo-variation-item--${logo.id}`}>
              <div className="logo-hitbox">
                <img className="logo-variation-image" src={logo.image} alt={logo.title} draggable="false" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
