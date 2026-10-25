
import "../styles/GraphicPosterSection.css";

export default function GraphicPosterSection() {
  return (
    <section
      className="graphic-poster-section"
      id="graphic-poster"
    >
      <div className="graphic-poster-artwork">

        {/* 뒤쪽 쇠 질감 */}
        <img
          className="graphic-poster-metal"
          src="/images/poster/metal-texture.webp"
          alt=""
          aria-hidden="true"
        />

        {/* 앞쪽 투명 포스터 */}
        <img
          className="graphic-poster-image"
          src="/images/poster/main-poster.png"
          alt="GoFurtherOutWest Graphic Poster"
        />

      </div>
    </section>
  );
}
