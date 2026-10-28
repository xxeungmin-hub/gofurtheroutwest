import "../styles/ZionCampaignSection.css";

export default function ZionCampaignSection() {
  return (
    <section className="zion-campaign-section">
      <div className="zion-campaign-inner">
        {/* 타이틀 */}
        <div className="zion-campaign-heading">
          <h2 className="zion-campaign-title">ZION CANYON</h2>
          <p className="zion-campaign-subtitle">
            GoFurtherOutWest 1st Campaign
          </p>
        </div>

        {/* 자유 배치 이미지 영역 */}
        <div className="zion-campaign-visuals">
          <img
            className="zion-campaign-shot zion-campaign-shot-left"
            src="/images/collections/zion-canyon/campaign-shot-01.png"
            alt="Zion Canyon campaign shot 1"
          />

          <img
            className="zion-campaign-shot zion-campaign-shot-right"
            src="/images/collections/zion-canyon/campaign-shot-02.png"
            alt="Zion Canyon campaign shot 2"
          />

          {/* 벽에 붙은 것처럼 보이는 PNG */}
          <img
            className="zion-campaign-wall-object"
            src="/images/collections/zion-canyon/campaign-wall-object.png"
            alt="Zion Canyon wall object"
          />
        </div>
      </div>
    </section>
  );
}