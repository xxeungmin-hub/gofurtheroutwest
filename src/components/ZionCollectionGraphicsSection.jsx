import "../styles/ZionCollectionGraphicsSection.css";

export default function ZionCollectionGraphicsSection() {
  return (
    <section className="zion-collection-graphics-section">
      <div className="zion-collection-graphics-inner">
        {/* 위 그래픽 카드 / 스티커 */}
        <div className="zion-graphics-cluster">
          <img
            className="zion-graphic-card zion-graphic-card-black"
            src="/images/collections/zion-canyon/graphic-card-01.svg"
            alt="GoFurtherOutWest graphic card"
          />

          <img
            className="zion-graphic-card zion-graphic-card-white"
            src="/images/collections/zion-canyon/graphic-card-02.svg"
            alt="GoFurtherOutWest collection graphic card"
          />

          <img
            className="zion-graphic-sticker"
            src="/images/collections/zion-canyon/graphic-sticker.svg"
            alt="Zion Canyon sticker graphic"
          />
        </div>

        {/* 아래 산맥 배경 */}
        <div className="zion-ground-wrap">
          <img
            className="zion-ground-image"
            src="/images/collections/zion-canyon/mountain-ground.png"
            alt="Mountain ground background"
          />
        </div>
      </div>
    </section>
  );
}