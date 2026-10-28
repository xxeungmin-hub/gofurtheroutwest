
import { useEffect, useState } from "react";
import "../styles/ZionGallerySection.css";

const BASE = "/images/collections/zion-canyon";

const galleryImages = [
  `${BASE}/gallery-01.png`,
  `${BASE}/gallery-02.png`,
  `${BASE}/gallery-03.png`,
  `${BASE}/gallery-04.png`,
  `${BASE}/gallery-05.png`,
];

export default function ZionGallerySection() {
  const [storyOpen, setStoryOpen] = useState(false);
  const [flipped, setFlipped] = useState(false);

  // 스토리 모달 ESC 닫기 및 스크롤 잠금
  useEffect(() => {
    if (!storyOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setStoryOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [storyOpen]);

  const openStory = () => {
    setFlipped(false);
    setStoryOpen(true);
  };

  const closeStory = () => {
    setStoryOpen(false);
    setFlipped(false);
  };

  return (
    <>
      <section className="zion-gallery-section">

        {/* 무한 자동 슬라이더 */}
        <div
          className="zion-gallery-slider"
          aria-label="Zion Canyon location gallery"
        >
          <div className="zion-gallery-track">

            {/* 첫 번째 이미지 세트 */}
            <div className="zion-gallery-group">
              {galleryImages.map((src, index) => (
                <div
                  className="zion-gallery-item"
                  key={`first-${index}`}
                >
                  <img
                    src={src}
                    alt={`Zion Canyon landscape ${index + 1}`}
                    draggable="false"
                    loading="eager"
                  />
                </div>
              ))}
            </div>

            {/* 두 번째 이미지 세트: 무한 반복용 */}
            <div
              className="zion-gallery-group"
              aria-hidden="true"
            >
              {galleryImages.map((src, index) => (
                <div
                  className="zion-gallery-item"
                  key={`second-${index}`}
                >
                  <img
                    src={src}
                    alt=""
                    draggable="false"
                    loading="eager"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 스토리 보기 */}
        <button
          type="button"
          className="zion-story-trigger"
          onClick={openStory}
        >
          스토리 보기
        </button>

      </section>

      {/* 스토리 카드 모달 */}
      {storyOpen && (
        <div
          className="zion-story-overlay"
          onClick={closeStory}
          role="presentation"
        >
          <button
            className="zion-story-close"
            type="button"
            onClick={closeStory}
            aria-label="Close story"
          >
            ×
          </button>

          <div
            className="zion-story-container"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Zion Canyon collection story"
          >
            <button
              className="zion-story-card-button"
              type="button"
              onClick={() => setFlipped((prev) => !prev)}
              aria-label="Flip story card"
            >
              <div
                className={`zion-story-card ${
                  flipped ? "is-flipped" : ""
                }`}
              >
                <div className="zion-story-face zion-story-front">
                  <img
                    src={`${BASE}/story-front.png`}
                    alt="Zion Canyon story front"
                  />
                </div>

                <div className="zion-story-face zion-story-back">
                  <img
                    src={`${BASE}/story-back.png`}
                    alt="Zion Canyon story back"
                  />
                </div>
              </div>
            </button>

            <p className="zion-story-hint">
              Click to flip
            </p>
          </div>
        </div>
      )}
    </>
  );
}
