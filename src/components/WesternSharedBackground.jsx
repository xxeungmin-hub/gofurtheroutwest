import { useEffect, useState } from "react";
import "../styles/WesternSharedBackground.css";

const images = [
  "/images/backgrounds/western-bg-01.webp",
  "/images/backgrounds/western-bg-02.webp",
  "/images/backgrounds/western-bg-03.webp",
  "/images/backgrounds/western-bg-04.webp",
];

export default function WesternSharedBackground({ children }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((i) => (i + 1) % images.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="western-shared-background">
      <div className="western-shared-images" aria-hidden="true">
        {images.map((src, index) => (
          <div
            key={src}
            className={`western-shared-image${index === active ? " is-active" : ""}`}
            style={{ backgroundImage: `url("${src}")` }}
          />
        ))}
        <div className="western-shared-shade" />
      </div>
      <div className="western-shared-content">{children}</div>
    </div>
  );
}
