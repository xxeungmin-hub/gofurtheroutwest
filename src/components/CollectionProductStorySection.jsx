
import "../styles/ZionProductStorySection.css";

export default function CollectionProductStorySection({
  collection,
}) {
  const story = collection.productStory;

  if (!story) return null;

  const glowColor = story.glowColor ?? "216, 142, 43";

  return (
    <section className="zion-product-story-section">
      <div className="zion-product-story-inner">

        {/* LEFT : PRODUCT DESCRIPTION */}
        <div className="zion-product-story-content">
          <h2
            className="zion-product-story-title"
            style={{
              color: story.titleColor ?? "#d7190c",
            }}
          >
            {story.title}
          </h2>

          <div className="zion-product-story-text">
            {story.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT : PRODUCT IMAGE */}
        <div className="zion-product-story-visual">

          {/* 컬렉션별 빛 색상 */}
          <div
            className="zion-product-story-glow"
            aria-hidden="true"
            style={{
              background: `radial-gradient(
                ellipse at center,
                rgba(${glowColor}, 0.32) 0%,
                rgba(${glowColor}, 0.23) 25%,
                rgba(${glowColor}, 0.13) 47%,
                rgba(${glowColor}, 0) 72%
              )`,
            }}
          />

          {/* 제품 PNG */}
         
<img
  className="zion-product-story-image"
  src={story.image}
  alt={`${collection.name} product`}
  loading="lazy"
  style={{
    transform: `scale(${story.imageScale ?? 1})`,
  }}
/>


          <p className="zion-product-story-hint">
            {story.hint ?? "Hold and Spin!"}
          </p>

        </div>
      </div>
    </section>
  );
}
