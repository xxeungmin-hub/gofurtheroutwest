import "../styles/PioneerGraphicsSection.css";

export default function PioneerGraphicsSection({ graphics }) {
  if (!graphics) return null;
  return (
    <section className="pioneer-graphics-section" aria-label="Pioneertown collection graphics">
      <div className="pioneer-graphics-stage">
        <img className="pioneer-graphic pioneer-graphic-newspaper" src={graphics.newspaper} alt="Pioneertown vintage newspaper graphic" loading="lazy" />
        <img className="pioneer-graphic pioneer-graphic-sign" src={graphics.roadSign} alt="Western welcome road sign" loading="lazy" />
        <img className="pioneer-graphic pioneer-graphic-fashion" src={graphics.fashionPoster} alt="Western fashion illustration" loading="lazy" />
        <img className="pioneer-graphic pioneer-graphic-poster" src={graphics.cowboyPoster} alt="Pioneertown western poster" loading="lazy" />
        <img className="pioneer-graphic pioneer-graphic-sticker" src={graphics.sticker} alt="Pioneer Town lettering sticker" loading="lazy" />
      </div>
      <div className="pioneer-ground-wrap">
        <img className="pioneer-ground-image" src={graphics.ground} alt="Wooden western building roof" loading="lazy" />
      </div>
    </section>
  );
}
