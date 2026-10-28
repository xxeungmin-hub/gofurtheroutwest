import "../styles/HorseshoeGraphicsSection.css";

const BASE = "/images/collections/horseshoe-bend";

export default function HorseshoeGraphicsSection({ graphics }) {
  if (!graphics) return null;

  return (
    <section className="horseshoe-graphics-section" aria-label="Horseshoe Bend collection graphics">
      <div className="horseshoe-graphics-stage">
        {/* 양쪽 배경 레터링: 동일한 graphic-bg.png를 두 번 배치 */}
        {graphics.background && (
          <>
            <img className="horseshoe-graphic-backdrop horseshoe-graphic-backdrop-left" src={graphics.background} alt="" aria-hidden="true" loading="lazy" />
            <img className="horseshoe-graphic-backdrop horseshoe-graphic-backdrop-right" src={graphics.background} alt="" aria-hidden="true" loading="lazy" />
          </>
        )}

        <img className="horseshoe-graphic horseshoe-graphic-logo" src={graphics.logo} alt="Horseshoe Bend graphic lettering" loading="lazy" />
        <img className="horseshoe-graphic horseshoe-graphic-card" src={graphics.card} alt="Horseshoe Bend barcode card" loading="lazy" />
        <img className="horseshoe-graphic horseshoe-graphic-horseshoe" src={graphics.horseshoe} alt="Horseshoe Bend horseshoe graphic" loading="lazy" />

        {/* 두 개의 장식 스티커: 따로 PNG/SVG를 쉽게 교체할 수 있음 */}
        <img className="horseshoe-graphic horseshoe-sticker horseshoe-sticker-one" src={`${BASE}/sticker-01.svg`} alt="Horseshoe Bend decorative sticker 1" loading="lazy" />
        <img className="horseshoe-graphic horseshoe-sticker horseshoe-sticker-two" src={`${BASE}/sticker-02.svg`} alt="Horseshoe Bend decorative sticker 2" loading="lazy" />
      </div>

      {graphics.ground && (
        <div className="horseshoe-graphic-ground-wrap">
          <img src={graphics.ground} className="horseshoe-graphic-ground" alt="" aria-hidden="true" loading="lazy" />
        </div>
      )}
    </section>
  );
}
