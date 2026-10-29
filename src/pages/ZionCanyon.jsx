
import "../styles/Home.css";
import "../styles/ZionCanyon.css";
import "../styles/CollectionWideScreen.css";
import ZionGallerySection from "../components/ZionGallerySection.jsx";
import ZionCollectionGraphicsSection from "../components/ZionCollectionGraphicsSection.jsx";
import ZionCampaignSection from "../components/ZionCampaignSection.jsx";
import ZionProductStorySection from "../components/ZionProductStorySection.jsx";
import ZionOtherCollectionsSection from "../components/ZionOtherCollectionsSection.jsx";
export default function ZionCanyon() {
  return (
    <main className="zion-page">
      <section className="zion-hero">

        {/* 배경 이미지 */}
        <div className="zion-hero-background" />

        {/* 어두운 오버레이 */}
        <div className="zion-hero-overlay" />

        {/* 기존 메인 페이지 헤더 */}
        <header className="hero-header">
          <nav className="nav-left">
            <span>Products</span>
            <span>Collections</span>
            <span>Explore</span>
          </nav>

          <div className="header-logo">
            <a href="/" aria-label="Back to Home">
              <img
                src="/images/header-logo.svg"
                alt="GoFurtherOutWest"
              />
            </a>
          </div>

          <nav className="nav-right">
            <span>Search</span>
            <span>Store</span>
            <span>Wishlist</span>
            <span>Bag</span>
          </nav>
        </header>

        {/* 중앙 타이틀 */}
        <div className="zion-hero-content">
         <h1 className="zion-hero-title">
  <img
    src="/images/collections/zion-canyon/hero-title.svg"
    alt="Zion Canyon"
  />
</h1>

          {/* 제품 PNG */}
          <img
  className="zion-hero-product"
  src="/images/collections/zion-canyon/hero-product.png"
  alt="Zion Canyon Light Object"
/>
        </div>

        {/* 클릭 안내 */}
        <div className="zion-click-guide">
          <span className="zion-click-circle" />
          <span>Click!</span>
        </div>

      </section>
      {/* ==========================
    ZION LOGO ANIMATION
========================== */}

<section className="zion-animation-section">

  {/* 로고 애니메이션 영상 */}
  <video
    className="zion-animation-video"
    src="/videos/collections/zion-canyon/logo-animation.mp4"
    autoPlay
    muted
    playsInline
    loop
    preload="metadata"
  />

  {/* 하단 컬렉션 설명 */}
  <div className="zion-animation-description">
    <p>
      Zion Canyon에 유명한 암석지대에서 들어오는 햇빛을 표현한
      &lt;Desert Sunlight Collection&gt;
      <br />
      GoFurtherOutWest가 제안하는 공간 조명 디자인을 경험해보세요
    </p>
  </div>

</section>
<ZionGallerySection />
<ZionCollectionGraphicsSection />
<ZionCampaignSection />
<ZionProductStorySection />
<ZionOtherCollectionsSection />
    </main>
  );
}
