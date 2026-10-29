import "../styles/DeathGraphicsSection.css";

export default function DeathGraphicsSection({ graphics }) {
  if (!graphics) return null;

  return (
    <section className="death-graphics-section" aria-label="Death Valley graphics">
      <div className="death-graphics-stage">
        <img
          className="death-graphic death-graphic-package"
          src={graphics.packageSpread}
          alt="Death Valley LP package spread"
          loading="lazy"
        />
        <img
          className="death-graphic death-graphic-logo"
          src={graphics.lettering}
          alt="Death Valley lettering"
          loading="lazy"
        />
        <img
          className="death-graphic death-graphic-guitar"
          src={graphics.guitar}
          alt="Electric blue guitar visual"
          loading="lazy"
        />
      </div>
      <div className="death-graphics-ground-wrap">
        <img
          className="death-graphics-ground"
          src={graphics.ground}
          alt="Blue-lit rock concert crowd"
          loading="lazy"
        />
      </div>
    </section>
  );
}
