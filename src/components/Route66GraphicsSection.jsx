import "../styles/Route66GraphicsSection.css";

export default function Route66GraphicsSection({ graphics }) {
  if (!graphics) return null;

  return (
    <section className="route66-graphics-section" aria-label="Route 66 collection graphics">
      <div className="route66-graphics-stage">
        <img className="route66-graphic route66-graphic-map" src={graphics.mapVintage} alt="Route 66 vintage western map" loading="lazy" />
        <img className="route66-graphic route66-graphic-usa" src={graphics.mapUSA} alt="Route 66 map across the United States" loading="lazy" />
        <img className="route66-graphic route66-graphic-ticket" src={graphics.ticket} alt="Route 66 graphic ticket" loading="lazy" />
      </div>
      {graphics.grass && (
        <div className="route66-grass-wrap">
          <img className="route66-graphic-grass" src={graphics.grass} alt="" aria-hidden="true" loading="lazy" />
        </div>
      )}
    </section>
  );
}
