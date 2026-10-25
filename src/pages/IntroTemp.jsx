
import { useEffect, useRef, useState } from "react";
import "../styles/Intro.css";

export default function Intro({ onFinish }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const videoRef = useRef(null);
  const leavingRef = useRef(false);

  const finishIntro = () => {
    if (leavingRef.current) return;

    leavingRef.current = true;
    setIsLeaving(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 자동 재생이 차단되면 메인 페이지로 이동
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        finishIntro();
      });
    }
  }, []);

  return (
    <div
      className={`intro ${isLeaving ? "intro--leave" : ""}`}
      onTransitionEnd={(event) => {
        if (
          isLeaving &&
          event.target === event.currentTarget &&
          event.propertyName === "opacity"
        ) {
          onFinish();
        }
      }}
    >
      <video
        ref={videoRef}
        className="intro__video"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={finishIntro}
        onError={finishIntro}
      >
        <source
          src="/videos/intro-logo.mp4"
          type="video/mp4"
        />
      </video>

      <button
        type="button"
        className="intro__skip"
        onClick={finishIntro}
      >
        SKIP INTRO →
      </button>
    </div>
  );
}
