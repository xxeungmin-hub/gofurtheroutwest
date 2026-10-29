import "../styles/MonumentGraphicsSection.css";

export default function MonumentGraphicsSection({ graphics }) {
  if (!graphics) return null;

  return (
    <section className="monument-graphics-section" aria-label="Monument Valley collection graphics">
      <div className="monument-graphics-stage">
        <img className="monument-graphic monument-graphic-howdy" src={graphics.howdy} alt="Howdy stone graphic" loading="lazy" />
        <img className="monument-graphic monument-graphic-lettering" src={graphics.lettering} alt="Monument Valley lettering" loading="lazy" />
        <img className="monument-graphic monument-graphic-cowboy" src={graphics.cowboy} alt="Western rider graphic" loading="lazy" />
        <img className="monument-graphic monument-graphic-ticket" src={graphics.ticket} alt="GFOOW ticket graphic" loading="lazy" />
      </div>
      <div className="monument-ground-wrap">
        <img className="monument-ground-image" src={graphics.ground} alt="Dusty western ground" loading="lazy" />
      </div>
    </section>
  );
}
