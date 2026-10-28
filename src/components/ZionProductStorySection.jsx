
import "../styles/ZionProductStorySection.css";

export default function ZionProductStorySection() {
  return (
    <section className="zion-product-story-section">

      <div className="zion-product-story-inner">

        {/* 왼쪽 제품 설명 */}
        <div className="zion-product-story-content">

          <h2 className="zion-product-story-title">
            Canyon Sunlight
          </h2>

          <div className="zion-product-story-text">

            <p>
              수천 년에 걸쳐 형성된 자이언 캐니언의 거대한
              암석 지형과 그 틈으로 스며드는 햇빛에서
              영감을 받은 조형 조명입니다.
              겹겹이 쌓인 지층의 형태와 거친 표면의
              질감을 재해석하여, 자연의 풍경을
              일상 속 하나의 오브제로 담아냈습니다.
            </p>

            <p>
              암석의 중심에서 퍼져 나오는 따뜻한 빛은
              협곡 사이로 쏟아지는 햇살을 연상시킵니다.
              불규칙한 형태와 섬세한 빛의 대비를 통해,
              조명이 꺼져 있을 때는 조각 작품으로,
              켜져 있을 때는 공간의 분위기를 변화시키는
              빛의 오브제로 존재합니다.
            </p>

          </div>
        </div>

        {/* 오른쪽 제품 이미지 */}
        <div className="zion-product-story-visual">

          {/* 배경 빛 효과 */}
          <div
            className="zion-product-story-glow"
            aria-hidden="true"
          />

          {/* 제품 PNG */}
          <img
            className="zion-product-story-image"
            src="/images/collections/zion-canyon/product-story.png"
            alt="Canyon Sunlight sculptural lighting object"
          />

          {/* 추후 3D 인터랙션 적용 예정 */}
          <p className="zion-product-story-hint">
            Hold and Spin!
          </p>

        </div>

      </div>

    </section>
  );
}
