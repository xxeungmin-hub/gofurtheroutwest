
import "../styles/Home.css";
import "../styles/ZionCanyon.css";
import "../styles/CollectionWideScreen.css";
import CollectionGallerySection from "../components/CollectionGallerySection.jsx";

import { getCollection } from "../data/collections.js";
import CollectionGraphicsSection from "../components/CollectionGraphicsSection.jsx";
import CollectionCampaignSection from "../components/CollectionCampaignSection.jsx";
import CollectionProductStorySection from "../components/CollectionProductStorySection.jsx";
import ZionOtherCollectionsSection from "../components/ZionOtherCollectionsSection.jsx";
import VegasGraphicsSection from "../components/VegasGraphicsSection.jsx";
import Route66GraphicsSection from "../components/Route66GraphicsSection.jsx";
import Route66CampaignSection from "../components/Route66CampaignSection.jsx";
import HorseshoeGraphicsSection from "../components/HorseshoeGraphicsSection.jsx";
import HorseshoeCampaignSection from "../components/HorseshoeCampaignSection.jsx";
import MonumentGraphicsSection from "../components/MonumentGraphicsSection.jsx";
import MonumentCampaignSection from "../components/MonumentCampaignSection.jsx";
import PioneerGraphicsSection from "../components/PioneerGraphicsSection.jsx";
import PioneerCampaignSection from "../components/PioneerCampaignSection.jsx";
import DeathGraphicsSection from "../components/DeathGraphicsSection.jsx";
import DeathCampaignSection from "../components/DeathCampaignSection.jsx";

export default function CollectionDetail({
  collectionId = "zion-canyon",
}) {
  const collection = getCollection(collectionId);

  if (!collection) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#000",
          color: "#fff",
          padding: "160px 40px",
          textAlign: "center",
        }}
      >
        <h1>Collection not found</h1>
        <a href="/" style={{ color: "#fff" }}>
          Back to Home
        </a>
      </main>
    );
  }

  const { hero, animation } = collection;

  return (
    <main className={`zion-page collection-page--${collection.id}`}>

      {/* =========================
          HERO
      ========================= */}
      <section className="zion-hero">

        {/* 배경 이미지 - 컬렉션별 교체 */}
        <div
          className="zion-hero-background"
          style={{
            backgroundImage: `url("${hero.background}")`,
          }}
        />

        <div className="zion-hero-overlay" />

        {/* 기존 메인 헤더 유지 */}
        <header className="hero-header">
          <nav className="nav-left">
            <span>Products</span>
            <a className="header-nav-link" href="/collections">Collections</a>
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

        {/* 타이틀 + 제품 */}
        <div className="zion-hero-content">
         
<h1
  className="zion-hero-title"
  style={{
    width: hero.titleWidth ?? "min(85vw, 1250px)",
  }}
>
  <img
    src={hero.title}
    alt={collection.name}
  />
</h1>


          <img
            className="zion-hero-product"
            src={hero.product}
            alt={`${collection.name} product`}
          />
        </div>

        <div className="zion-click-guide">
          <span className="zion-click-circle" />
          <span>Click!</span>
        </div>

      </section>

      {/* =========================
          LOGO ANIMATION
      ========================= */}
      <section className="zion-animation-section">

        <video
          key={animation.video}
          className="zion-animation-video"
          src={animation.video}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
        />

        <div className="zion-animation-description">
          <p>{animation.description}</p>
        </div>

      </section>
<CollectionGallerySection
        collection={collection}
      />
      {collection.graphics?.layout === "vegas-collage" ? (
        <VegasGraphicsSection graphics={collection.graphics} />
      ) : collection.graphics?.layout === "route66-collage" ? (
        <Route66GraphicsSection graphics={collection.graphics} />
      ) : collection.graphics?.layout === "monument-collage" ? (
        <MonumentGraphicsSection graphics={collection.graphics} />
      ) : collection.graphics?.layout === "pioneer-collage" ? (
        <PioneerGraphicsSection graphics={collection.graphics} />
      ) : collection.graphics?.layout === "death-collage" ? (
        <DeathGraphicsSection graphics={collection.graphics} />
      ) : collection.graphics?.layout === "horseshoe-collage" ? (
        <HorseshoeGraphicsSection graphics={collection.graphics} />
      ) : (
        <CollectionGraphicsSection collection={collection} />
      )}
      {collection.campaign?.layout === "route66-grid" ? (
        <Route66CampaignSection collection={collection} />
      ) : collection.campaign?.layout === "monument-three" ? (
        <MonumentCampaignSection collection={collection} />
      ) : collection.campaign?.layout === "pioneer-grid" ? (
        <PioneerCampaignSection collection={collection} />
      ) : collection.campaign?.layout === "death-two" ? (
        <DeathCampaignSection collection={collection} />
      ) : collection.campaign?.layout === "horseshoe-grid" ? (
        <HorseshoeCampaignSection collection={collection} />
      ) : (
        <CollectionCampaignSection collection={collection} />
      )}
      <CollectionProductStorySection collection={collection} />
       <ZionOtherCollectionsSection />
    </main>
  );
}
