
import "../styles/ZionCampaignSection.css";
import "../styles/CollectionCampaignSection.css";

export default function CollectionCampaignSection({ collection }) {
  const campaign = collection.campaign;

  if (!campaign) return null;

  const isLegacyLayout = !campaign.items;
  const isVegasGrid = campaign.layout === "vegas-grid";

  const legacyImages = [
    {
      src: campaign.shotLeft,
      className: "zion-campaign-shot zion-campaign-shot-left",
    },
    {
      src: campaign.shotRight,
      className: "zion-campaign-shot zion-campaign-shot-right",
    },
    {
      src: campaign.wallObject,
      className: "zion-campaign-wall-object",
    },
  ].filter((item) => item.src);

  return (
    <section className={`zion-campaign-section${isVegasGrid ? " collection-vegas-campaign" : ""}`}>
      <div className="zion-campaign-inner">

        <div className="zion-campaign-heading">
          <h2 className="zion-campaign-title">
            {campaign.titleImage ? (
              <img
                className="collection-campaign-lettering"
                src={campaign.titleImage}
                alt={campaign.title}
                style={{
                  width:
                    campaign.titleWidth ??
                    "min(78vw, 1050px)",
                }}
              />
            ) : (
              campaign.title
            )}
          </h2>

          <p className="zion-campaign-subtitle">
            {campaign.subtitle}
          </p>
        </div>

        {/* VEGAS : 왼쪽 2장 + 오른쪽 1장 */}
        {isVegasGrid ? (
          <div className="vegas-campaign-grid">

            <div className="vegas-campaign-left">
              {campaign.items.slice(0, 2).map((item, i) => (
                <img
                  key={i}
                  src={item.src}
                  alt={`${collection.name} campaign ${i + 1}`}
                  loading="lazy"
                />
              ))}
            </div>

            <div className="vegas-campaign-right">
              <img
                src={campaign.items[2]?.src}
                alt={`${collection.name} campaign 3`}
                loading="lazy"
              />
            </div>

          </div>
        ) : isLegacyLayout ? (

          /* ZION : 기존 배치 그대로 */
          <div className="zion-campaign-visuals">
            {legacyImages.map((item, i) => (
              <img
                key={i}
                className={item.className}
                src={item.src}
                alt={`${collection.name} campaign ${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>

        ) : (

          /* 다른 컬렉션 : 자유 배치 */
          <div
            className="zion-campaign-visuals collection-campaign-visuals--custom"
            style={{
              "--campaign-height":
                campaign.height ?? "1300px",
              "--campaign-height-medium":
                campaign.heightMedium ?? "1100px",
              "--campaign-height-small":
                campaign.heightSmall ?? "850px",
            }}
          >
            {campaign.items.map((item, i) => {
              const d = item.layout ?? {};
              const m = item.medium ?? {};
              const s = item.small ?? {};

              return (
                <img
                  key={i}
                  className="collection-campaign-art"
                  src={item.src}
                  alt={`${collection.name} campaign ${i + 1}`}
                  loading="lazy"
                  style={{
                    "--art-width": d.width ?? "30%",
                    "--art-left": d.left ?? "auto",
                    "--art-right": d.right ?? "auto",
                    "--art-top": d.top ?? "auto",
                    "--art-bottom": d.bottom ?? "auto",
                    "--art-rotate": `${d.rotate ?? 0}deg`,
                    "--art-medium-width": m.width ?? d.width ?? "30%",
                    "--art-medium-left": m.left ?? d.left ?? "auto",
                    "--art-medium-right": m.right ?? d.right ?? "auto",
                    "--art-medium-top": m.top ?? d.top ?? "auto",
                    "--art-medium-bottom": m.bottom ?? d.bottom ?? "auto",
                    "--art-small-width": s.width ?? m.width ?? d.width ?? "30%",
                    "--art-small-left": s.left ?? m.left ?? d.left ?? "auto",
                    "--art-small-right": s.right ?? m.right ?? d.right ?? "auto",
                    "--art-small-top": s.top ?? m.top ?? d.top ?? "auto",
                    "--art-small-bottom": s.bottom ?? m.bottom ?? d.bottom ?? "auto",
                    zIndex: d.zIndex ?? 2,
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
