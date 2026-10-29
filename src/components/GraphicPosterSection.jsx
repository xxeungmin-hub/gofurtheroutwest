import "../styles/GraphicPosterSection.css";
import "../styles/PosterExtras.css";

export default function GraphicPosterSection({ variant = "first" }) {
  const isSecond = variant === "second";
  return (
    <section
      id={isSecond ? "graphic-poster-02" : "graphic-poster"}
      className={`graphic-poster-section${isSecond ? " graphic-poster-section--second" : ""}`}
      aria-label={isSecond ? "Graphic poster 02" : "Graphic poster 01"}
    >
      <div className="graphic-poster-artwork">
        {!isSecond && (
          <img className="graphic-poster-metal" src="/images/poster/metal-texture.webp" alt="" aria-hidden="true" />
        )}
        <img
          className="graphic-poster-image"
          src={isSecond ? "/images/poster/main-poster-02.png" : "/images/poster/main-poster.png"}
          alt={isSecond ? "GoFurtherOutWest Graphic Poster 02" : "GoFurtherOutWest Graphic Poster 01"}
        />
      </div>
    </section>
  );
}
