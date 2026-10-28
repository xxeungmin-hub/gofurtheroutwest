
import "../styles/ZionCollectionGraphicsSection.css";

const graphicClasses = {
  "card-black": "zion-graphic-card zion-graphic-card-black",
  "card-white": "zion-graphic-card zion-graphic-card-white",
  sticker: "zion-graphic-sticker",
};

export default function CollectionGraphicsSection({
  collection,
}) {
  const graphics = collection.graphics;

  if (!graphics) return null;

  return (
    <section className="zion-collection-graphics-section">
      <div className="zion-collection-graphics-inner">

        {/* GRAPHIC CLUSTER */}
        <div
          className="zion-graphics-cluster"
          style={
            graphics.clusterHeight
              ? { height: graphics.clusterHeight }
              : undefined
          }
        >
          {graphics.items.map((item, index) => {
            const presetClass = graphicClasses[item.type];

            // 지정된 프리셋이 없으면 자유 배치
            const isCustom = !presetClass;

            const customStyle = isCustom
              ? {
                  position: "absolute",
                  display: "block",
                  height: "auto",
                  maxWidth: "none",
                  width: item.layout?.width ?? "35%",
                  left: item.layout?.left,
                  right: item.layout?.right,
                  top: item.layout?.top,
                  bottom: item.layout?.bottom,
                  zIndex: item.layout?.zIndex ?? 2,
                  transform: `rotate(${item.layout?.rotate ?? 0}deg)`,
                  userSelect: "none",
                  pointerEvents: "none",
                }
              : undefined;

            return (
              <img
                key={`${item.image}-${index}`}
                className={
                  presetClass || "collection-graphic-custom"
                }
                src={item.image}
                alt={`${collection.name} graphic ${index + 1}`}
                style={customStyle}
                draggable="false"
                loading="lazy"
              />
            );
          })}
        </div>

        {/* GROUND IMAGE */}
        {graphics.ground && (
          <div className="zion-ground-wrap">
            <img
              className="zion-ground-image"
              src={graphics.ground}
              alt={`${collection.name} landscape graphic`}
              loading="lazy"
            />
          </div>
        )}

      </div>
    </section>
  );
}
