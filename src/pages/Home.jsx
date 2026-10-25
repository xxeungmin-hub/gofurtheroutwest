
import { useRef, useState } from "react";
import "../styles/Home.css";
import LogoGridSection from "../components/LogoGridSection.jsx";
import SelectedPlacesSection from "../components/SelectedPlacesSection.jsx";
import WesternSharedBackground from "../components/WesternSharedBackground.jsx";
import LogoVariationsSection from "../components/LogoVariationsSection.jsx";

import GraphicPosterSection from "../components/GraphicPosterSection.jsx";


export default function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Music playback failed:", error);
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <main className="home-page">
      <section className="home-hero">

        {/* 브랜드 필름 배경 */}
        <video
          className="hero-video"
          src="/videos/brand-film.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* 검정 오버레이 35% */}
        <div className="hero-overlay" />

        {/* 상단 네비게이션 */}
        <header className="hero-header">
          <nav className="nav-left">
            <span>Products</span>
            <span>Collections</span>
            <span>Explore</span>
          </nav>

          <div className="header-logo">
            <img
              src="/images/header-logo.svg"
              alt="GoFurtherOutWest"
            />
          </div>

          <nav className="nav-right">
            <span>Search</span>
            <span>Store</span>
            <span>Wishlist</span>
            <span>Bag</span>
          </nav>
        </header>

        {/* 중앙 메인 타이틀 */}
        <div className="hero-content">
          <img
            className="hero-title"
            src="/images/main-title.svg"
            alt="GoFurtherOutWest"
          />

          <p className="hero-subtitle">
            Recorded Somewhere Beyond The West
          </p>
        </div>

        {/* 스크롤 안내 */}
        <div className="scroll-stamp">
          Scrolling
        </div>

        {/* 왼쪽 하단 LP 플레이어 */}
        <div className="lp-player">
          <button
            type="button"
            className="lp-button"
            onClick={toggleMusic}
            aria-label={
              isPlaying ? "Pause music" : "Play music"
            }
            aria-pressed={isPlaying}
          >
            <img
              src="/images/lp-player.png"
              alt=""
            />
          </button>

          <span className="lp-label">
            {isPlaying ? "Sound Off!" : "Sound On!"}
          </span>

          <audio
            ref={audioRef}
            src="/audio/western-music.mp3"
            loop
            preload="none"
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            onError={() => setIsPlaying(false)}
          />
        </div>

      </section>
      <div className="hero-transition" aria-hidden="true" />

{/* ==========================
    BRAND OVERVIEW
========================== */}

<section className="brand-overview" id="brand-overview">

  <div className="overview-content">

    {/* 상단 브랜드 소개 */}
    <div className="overview-top">

      <h2 className="overview-heading">
        Brand Overview
      </h2>

      <p className="overview-text overview-english">
        Go Further Out West is a living object brand that
        reimagines the mood of the American West through
        contemporary design. Rather than reproducing western
        culture in a literal way, the brand collects visual
        traces from deserts, highways, motels, rock formations,
        neon signs, and forgotten frontier landscapes.
        <br />
        These elements are translated into experimental
        objects, graphics, and spatial experiences.
      </p>

      <p className="overview-text overview-korean">
        Go Further Out West는 미국 서부의 무드와 라이프스타일을
        현대적으로 재해석하는 리빙 오브제 브랜드입니다.
        <br />
        브랜드는 웨스턴 문화를 직접적으로 재현하기보다, 사막과
        고속도로, 모텔, 암석 지형, 네온사인, 개척지의 흔적에서
        발견되는 시각적 요소를 수집합니다.
        <br />
        그리고 그것을 실험적인 오브제, 그래픽, 공간 경험으로
        확장합니다.
      </p>

    </div>

    {/* 웨스턴 풍경 그래픽 */}
    <div className="overview-landscape">
      <img
        src="/images/overview-landscape.svg"
        alt="Western desert landscape"
      />
    </div>

    {/* 하단 컬렉션 소개 */}
    <div className="overview-bottom">

      <p className="overview-text overview-english">
        Each collection begins from a specific western location
        and its imagined story. Route 66, Monument Valley,
        Horseshoe Bend, Blue Swallow Motel, and other symbolic
        places become starting points for objects that feel
        as if they were discovered in the landscape itself.
        <br />
        Through rough textures, dusty gradients, sculptural
        forms, and cinematic narratives, Go Further Out West
        proposes a new western lifestyle — one that is
        nostalgic, bold, dry, strange, and contemporary.
      </p>

      <p className="overview-text overview-korean">
        각 컬렉션은 특정 서부 장소와 그곳에서 시작되는 상상 속
        이야기로부터 출발합니다.
        장소별 상징적인 장소들은 마치 지형 속에서 발견된 듯한
        오브제로 변환됩니다.
        거친 텍스처, 모래바람 같은 그라데이션, 조각적인 형태,
        영화적인 서사를 통해 Go Further Out West는 향수와
        대담함, 건조함과 낯선 감각이 공존하는 새로운 웨스턴
        라이프스타일을 제안합니다.
      </p>

    </div>

  </div>

</section>


<WesternSharedBackground>
  <LogoGridSection />
  <SelectedPlacesSection />

  <div
    className="western-to-black"
    aria-hidden="true"
  />
</WesternSharedBackground>

<LogoVariationsSection />
<GraphicPosterSection />
    </main>
  );
}
