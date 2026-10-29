
import { useState } from "react";
import "../styles/SelectedPlacesSection.css";

const stickers = [
  {
    id: "route66",
    name: "Route 66",
    file: "route66.svg",
    slug: "route-66",
    x: "13%",
    y: "40%",
    width: "22%",
    rotate: "-12deg",
  },
  {
    id: "zion",
    name: "Zion Canyon",
    file: "zion-canyon.svg",
    slug: "zion-canyon",
    x: "35%",
    y: "35%",
    width: "18%",
    rotate: "-13deg",
  },
  {
    id: "pioneer",
    name: "Pioneertown",
    file: "pioneertown.svg",
    slug: "pioneertown",
    x: "72%",
    y: "29%",
    width: "18%",
    rotate: "13deg",
  },
  {
    id: "horseshoe",
    name: "Horseshoe Bend",
    file: "horseshoe-bend.svg",
    slug: "horseshoe-bend",
    x: "88%",
    y: "52%",
    width: "18%",
    rotate: "-10deg",
  },
  {
    id: "monument",
    name: "Monument Valley",
    file: "monument-valley.svg",
    slug: "monument-valley",
    x: "25%",
    y: "76%",
    width: "19%",
    rotate: "11deg",
  },
  {
    id: "vegas",
    name: "Vegas Vic",
    file: "vegas-vic.svg",
    slug: "vegas-vic",
    x: "49%",
    y: "61%",
    width: "20%",
    rotate: "-10deg",
  },
  {
    id: "blue",
    name: "Blue Swallow Motel",
    file: "blue-swallow-motel.svg",
    slug: "blue-swallow-motel",
    x: "70%",
    y: "76%",
    width: "20%",
    rotate: "9deg",
  },
  {
    id: "death",
    name: "Death Valley",
    file: "death-valley.svg",
    slug: "death-valley",
    x: "88%",
    y: "86%",
    width: "18%",
    rotate: "-12deg",
  },
];

const previewLayout = [
  { x: 23, y: 9, w: 54, r: -10, z: 1 },
  { x: 43, y: 24, w: 47, r: 59, z: 3 },
  { x: 2, y: 27, w: 46, r: -8, z: 2 },
  { x: 58, y: 76, w: 38, r: -24, z: 8 },
  { x: 4, y: 79, w: 46, r: 8, z: 5 },
  { x: 24, y: 60, w: 44, r: -13, z: 6 },
  { x: 53, y: 44, w: 46, r: 12, z: 7 },
  { x: 52, y: 73, w: 42, r: -11, z: 4 },
];

export default function SelectedPlacesSection() {
  const [opened, setOpened] = useState(false);

  return (
    <section
      className="selected-places-section"
      id="selected-places"
    >
      <div className="selected-places-inner">
        <header className="selected-places-header">
          <h2 className="selected-places-title">
            Selected Places
          </h2>

          <p className="selected-places-description">
            미국 서부의 광활한 풍경부터 작은 마을에 숨겨진 이야기까지.
            <br className="selected-places-desktop-break" />
            GoFurtherOutWest가 새롭게 해석한 여덟 개의 장소와 그곳에 담긴 특별한 이야기를 만나보세요.
          </p>
        </header>

        <div
          className={`sticker-experience${opened ? " is-opened" : ""}`}
        >
          <div className="sticker-stage">

            {/* 개봉 후 펼쳐지는 8개 스티커 */}
            <div
              className="stickers-scatter-layer"
              aria-hidden={!opened}
            >
              {stickers.map((item, index) => (
                <a
                  key={item.id}
                  href={item.slug === "blue-swallow-motel" ? undefined : `/collections/${item.slug}`}
                  aria-disabled={item.slug === "blue-swallow-motel" ? "true" : undefined}
                  onClick={item.slug === "blue-swallow-motel" ? (event) => event.preventDefault() : undefined}
                  className={`scatter-sticker sticker-${item.id}`}
                  aria-label={`${item.name} 상세페이지`}
                  tabIndex={opened && item.slug !== "blue-swallow-motel" ? 0 : -1}
                  style={{
                    "--sticker-x": item.x,
                    "--sticker-y": item.y,
                    "--sticker-w": item.width,
                    "--sticker-r": item.rotate,
                    "--sticker-delay": `${index * 0.055}s`,
                  }}
                >
                  <img
                    src={`/images/sticker-pack/${item.file}`}
                    alt={item.name}
                    draggable={false}
                  />
                </a>
              ))}
            </div>

            {/* 중앙 패키지: 동일한 600x900 이미지 */}
            <div className="sticker-pack">
              <div className="sticker-pack-art">

                {/* 포장 안쪽 스티커: 비닐 영역에서만 보임 */}
                <div
                  className="pack-preview"
                  aria-hidden="true"
                >
                  {stickers.map((item, index) => {
                    const p = previewLayout[index];

                    return (
                      <img
                        key={item.id}
                        className="pack-preview-item"
                        src={`/images/sticker-pack/${item.file}`}
                        alt=""
                        draggable={false}
                        style={{
                          left: `${p.x}%`,
                          top: `${p.y}%`,
                          width: `${p.w}%`,
                          zIndex: p.z,
                          transform: `rotate(${p.r}deg)`,
                        }}
                      />
                    );
                  })}
                </div>

                {/* 비닐은 스티커 위, 실제 투명 PNG */}
                <img
                  className="pack-vinyl"
                  src="/images/sticker-pack/package-vinyl.png"
                  alt=""
                  draggable={false}
                />

                {/* 포장종이는 맨 앞 */}
                <img
                  className="pack-paper"
                  src="/images/sticker-pack/package-paper.png"
                  alt=""
                  draggable={false}
                />
              </div>
            </div>

            {/* 클릭 유도 */}
            {!opened && (
              <button
                type="button"
                className="sticker-click-trigger"
                onClick={() => setOpened(true)}
                aria-label="스티커팩 열기"
              >
                <span className="trigger-ring trigger-ring-1" />
                <span className="trigger-ring trigger-ring-2" />
                <span className="trigger-dot" />
                <span className="trigger-text">CLICK</span>
              </button>
            )}
          </div>

          {/* 다시 포장하기 */}
          {opened && (
            <button
              type="button"
              className="sticker-repack"
              onClick={() => setOpened(false)}
            >
              ↶ REPACK
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
