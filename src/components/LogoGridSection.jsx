
import { useEffect, useRef, useState } from "react";
import "../styles/LogoGridSection.css";

const backgroundImages = [
  "/images/backgrounds/western-bg-01.webp",
  "/images/backgrounds/western-bg-02.webp",
  "/images/backgrounds/western-bg-03.webp",
  "/images/backgrounds/western-bg-04.webp",
];

export default function LogoGridSection() {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [imagesReady, setImagesReady] = useState(
    () => backgroundImages.map(() => false)
  );

  useEffect(() => {
    let cancelled = false;

    backgroundImages.forEach((src, index) => {
      const image = new Image();

      const markReady = () => {
        if (cancelled) return;

        setImagesReady((previous) =>
          previous.map((ready, i) =>
            i === index ? true : ready
          )
        );
      };

      image.onload = markReady;
      image.src = src;

      if (image.complete && image.naturalWidth > 0) {
        markReady();
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = window.setInterval(() => {
      setActiveImage((current) => {
        for (let step = 1; step <= backgroundImages.length; step++) {
          const next =
            (current + step) % backgroundImages.length;

          if (imagesReady[next]) {
            return next;
          }
        }

        return current;
      });
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isVisible, imagesReady]);

  return (
    <section
      ref={sectionRef}
      className={`logo-grid-section ${
        isVisible ? "is-visible" : ""
      }`}
      id="logo-grid"
    >
      {/* Background images */}
      <div
        className="logo-grid-background"
        aria-hidden="true"
      >
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            className={`logo-grid-bg-image ${
              activeImage === index && imagesReady[index]
                ? "is-active"
                : ""
            }`}
            style={{
              backgroundImage: `url("${src}")`,
            }}
          />
        ))}
      </div>

      <div className="logo-grid-overlay" />
      <div className="logo-grid-top-gradient" />

      <div className="logo-grid-content">
        <div className="logo-grid-visual">
          <div className="logo-grid-heading">
            Main Logo Grid System
          </div>

          {/* Logo, grid and measurements */}
          <div className="logo-grid-artwork">
            <img
              className="grid-layer grid-layer-logo"
              src="/images/logo-grid/grid-logo.svg"
              alt="GoFurtherOutWest main logo"
            />

            <img
              className="grid-layer grid-layer-horizontal"
              src="/images/logo-grid/grid-horizontal.svg"
              alt=""
            />

            <img
              className="grid-layer grid-layer-vertical"
              src="/images/logo-grid/grid-vertical.svg"
              alt=""
            />

            <img
              className="grid-layer grid-layer-measure"
              src="/images/logo-grid/grid-measure.svg"
              alt=""
            />

            {/* Measurement numbers */}
            <div
              className="grid-measure-labels"
              aria-hidden="true"
            >
              <span className="measure-label measure-1">
                2X
              </span>
              <span className="measure-label measure-2">
                4X
              </span>
              <span className="measure-label measure-3">
                1.5X
              </span>
              <span className="measure-label measure-4">
                4X
              </span>
              <span className="measure-label measure-5">
                2X
              </span>
              <span className="measure-label measure-bottom">
                50X
              </span>
            </div>
          </div>
        </div>

        <p className="logo-grid-description">
          GoFurtherOutWest의 메인 로고입니다.
          <br />
          웨스턴의 거친 지형에서 영감을 받은 실루엣과
          <br />
          서부 전통의 슬랩세리프를 기반으로 한 서체를
          사용하였습니다.
        </p>
      </div>
    </section>
  );
}
