import { useState } from "react";
import "../styles/SelectedPlacesSection.css";

// 사진: public/images/places/<slug>.webp
// 레터링+장소별 로고 투명 PNG: public/images/place-graphics/<slug>.png
const places = [
  { name: "Zion Canyon", slug: "zion-canyon" },
  { name: "Vegas Vic", slug: "vegas-vic" },
  { name: "Route 66", slug: "route-66" },
  { name: "Horseshoe Bend", slug: "horseshoe-bend" },
  { name: "Monument Valley", slug: "monument-valley" },
  { name: "Blue Swallow Motel", slug: "blue-swallow-motel" },
  { name: "Pioneertown", slug: "pioneertown" },
  { name: "Death Valley", slug: "death-valley" },
];

function PlaceCard({ place, duplicate = false }) {
  const [graphicLoaded, setGraphicLoaded] = useState(false);
  return (
    <a
      className="selected-place-card"
      href={`/places/${place.slug}`}
      aria-label={`${place.name} 컬렉션 자세히 보기`}
      aria-hidden={duplicate ? "true" : undefined}
      tabIndex={duplicate ? -1 : undefined}
    >
      <img
        className="selected-place-photo"
        src={`/images/places/${place.slug}.webp`}
        alt=""
        loading="lazy"
      />
      <div className="selected-place-glass" aria-hidden="true" />
      {!graphicLoaded && (
        <div className="selected-place-placeholder" aria-hidden="true">
          <strong>{place.name}</strong>
          <span>GoFurtherOutWest</span>
        </div>
      )}
      <img
        className={`selected-place-graphic${graphicLoaded ? " is-ready" : ""}`}
        src={`/images/place-graphics/${place.slug}.png`}
        alt=""
        loading="lazy"
        onLoad={() => setGraphicLoaded(true)}
        onError={() => setGraphicLoaded(false)}
      />
      <span className="selected-place-arrow" aria-hidden="true">
        <svg viewBox="0 0 54 24" fill="none">
          <path d="M2 19H49L35 5" stroke="currentColor" strokeWidth="3" />
        </svg>
      </span>
    </a>
  );
}

export default function SelectedPlacesSection() {
  const [paused, setPaused] = useState(false);
  return (
    <section className="selected-places-section" id="selected-places">
      <div className="selected-places-copy">
        <h2>Selected Places</h2>
        <p>
          미국 서부의 광활한 풍경부터 작은 마을에 숨겨진 이야기까지.
          <br className="selected-places-desktop-break" />
          GoFurtherOutWest가 새롭게 해석한 여덟 개의 장소와 그곳에 담긴 특별한 이야기를 만나보세요.
        </p>
      </div>
      <div
        className={`selected-places-viewport${paused ? " is-paused" : ""}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
        }}
        aria-label="여덟 개의 서부 장소 슬라이더"
      >
        <div className="selected-places-track">
          {[0, 1].map((copy) => (
            <div className="selected-places-set" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
              {places.map((place) => <PlaceCard key={`${copy}-${place.slug}`} place={place} duplicate={copy === 1} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
