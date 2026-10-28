
import "../styles/ZionOtherCollectionsSection.css";

const BASE = "/images/collections/thumbnails";

const collections = [
  {
    id: "zion-canyon",
    name: "Zion Canyon",
    image: `${BASE}/zion-canyon.png`,
  },
  {
    id: "pioneer-town",
    name: "Pioneer Town",
    image: `${BASE}/pioneer-town.png`,
  },
  {
    id: "route-66",
    name: "Route 66",
    image: `${BASE}/route-66.png`,
  },
  {
    id: "monument-valley",
    name: "Monument Valley",
    image: `${BASE}/monument-valley.png`,
  },
  {
    id: "horseshoe-bend",
    name: "Horseshoe Bend",
    image: `${BASE}/horseshoe-bend.png`,
  },
  {
    id: "vegas-vic",
    name: "Vegas Vic",
    image: `${BASE}/vegas-vic.png`,
  },
  {
    id: "death-valley",
    name: "Death Valley",
    image: `${BASE}/death-valley.png`,
  },
  {
    id: "blue-swallow-motel",
    name: "Blue Swallow Motel",
    image: `${BASE}/blue-swallow-motel.png`,
  },
];

export default function ZionOtherCollectionsSection() {
  return (
    <section className="zion-other-collections">

      <div className="zion-other-collections-inner">

        {/* SECTION HEADING */}
        <div className="zion-other-heading">
          <h2>
            Explore More Collections
          </h2>

          <p className="zion-other-subtitle">
            Eight places, eight stories.
          </p>

          <p className="zion-other-description">
            미국 서부의 여덟 장소에서 시작된
            여덟 개의 이야기.
            <br />
            GoFurtherOutWest의 컬렉션을
            더 깊이 탐험해보세요.
          </p>
        </div>

        {/* COLLECTION GRID */}
        <div className="zion-other-grid">
          {collections.map((collection) => (
            <div
              className="zion-other-item"
              key={collection.id}
            >
              <div className="zion-other-image-wrap">
                <img
                  src={collection.image}
                  alt={collection.name}
                  loading="lazy"
                />
              </div>

              <p className="zion-other-name">
                {collection.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
