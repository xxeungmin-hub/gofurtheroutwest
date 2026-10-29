import "../styles/PosterExtras.css";

const posters = [
  { src: "/images/poster/main-poster.png", label: "POSTER 01", hasMetal: true },
  { src: "/images/poster/main-poster-02.png", label: "POSTER 02", hasMetal: false },
];

export default function PosterPairSection() {
  return (
    <section className="poster-pair-section" aria-label="Two graphic posters">
      <div className="poster-pair-inner">
        <header className="poster-pair-heading">
          <span>GRAPHIC POSTERS</span>
          <span>01 — 02 / GoFurtherOutWest</span>
        </header>
        <div className="poster-pair-grid">
          {posters.map((poster) => (
            <figure className="poster-pair-card" key={poster.src}>
              <div className={`poster-pair-artwork${poster.hasMetal ? " poster-pair-artwork--metal" : " poster-pair-artwork--plain"}`}>
                {poster.hasMetal && (
                  <img className="poster-pair-metal" src="/images/poster/metal-texture.webp" alt="" aria-hidden="true" />
                )}
                <img className="poster-pair-image" src={poster.src} alt={`GoFurtherOutWest ${poster.label}`} />
              </div>
              <figcaption>{poster.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
