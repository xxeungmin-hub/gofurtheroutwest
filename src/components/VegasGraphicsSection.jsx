
import "../styles/VegasGraphicsSection.css";

export default function VegasGraphicsSection({ graphics }) {
  if (!graphics) return null;

  return (
    <section className="vegas-graphics-section">

      {/* 상단 그래픽 4개 + 스티커 2개 */}
      <div className="vegas-graphics-top">

        <div className="vegas-graphics-main">
          {graphics.topImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Vegas Vic graphic ${index + 1}`}
              className={`vegas-graphics-main-item vegas-graphics-main-${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>

        <div className="vegas-graphics-stickers">
          {graphics.stickers.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Vegas Vic sticker ${index + 1}`}
              className={`vegas-graphics-sticker vegas-graphics-sticker-${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>

      </div>

      {/* 하단 네온사인 4개 */}
      <div className="vegas-graphics-neon">
        {graphics.neonImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Vegas Vic neon sign ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>

    </section>
  );
}
