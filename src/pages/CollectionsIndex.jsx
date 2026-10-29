import { collections } from "../data/collections.js";
import "../styles/CollectionsIndex.css";

const entries = [
  ["zion-canyon", "01", "ZION CANYON", "SCULPTURAL LIGHT"],
  ["vegas-vic", "02", "VEGAS VIC", "NEON CANDLE"],
  ["route-66", "03", "ROUTE 66", "TUFTED RUG"],
  ["horseshoe-bend", "04", "HORSESHOE BEND", "WESTERN OBJECT"],
  ["monument-valley", "05", "MONUMENT VALLEY", "INCENSE TRAY"],
  ["pioneertown", "06", "PIONEERTOWN", "CUSTOM WESTERN HAT"],
  ["death-valley", "07", "DEATH VALLEY", "VINYL RECORD"],
  ["blue-swallow-motel", "08", "BLUE SWALLOW MOTEL", "KEYCHAIN"],
];

export default function CollectionsIndex() {
  return (
    <main className="collections-index">
      <header className="collections-index-nav">
        <a className="collections-index-wordmark" href="/" aria-label="GoFurtherOutWest Home">
          <img src="/images/header-logo.svg" alt="GoFurtherOutWest" />
        </a>
        <a className="collections-index-home" href="/">BACK TO HOME <span aria-hidden="true">↗</span></a>
      </header>

      <div className="collections-index-intro">
        <div className="collections-index-eyebrow"><span>GOFURTHEROUTWEST</span><span>2026 / COLLECTION ARCHIVE</span></div>
        <h1>SELECTED<br /><em>PLACES.</em></h1>
        <div className="collections-index-intro-bottom">
          <p>Eight places. Eight stories.<br />A new perspective on the American West.</p>
          <span>EXPLORE ALL COLLECTIONS <b>(08)</b></span>
        </div>
      </div>

      <section className="collections-index-grid" aria-label="8 collections">
        {entries.map(([id, number, title, type]) => {
          const item = collections[id];
          const ready = Boolean(item);
          const image = item?.hero?.product ?? "/images/sticker-pack/blue-swallow-motel.svg";
          const artBackground = item?.hero?.background;
          const contents = (
            <>
              <div className="collections-index-card-art" style={{ "--accent": item?.accentColor ?? "#5DCBC6" }}>
                {artBackground && <img className="collections-index-card-bg" src={artBackground} alt="" loading="lazy" />}
                <div className="collections-index-card-shade" />
                <img className="collections-index-card-product" src={image} alt="" loading="lazy" />
                <span className="collections-index-card-number">{number} / 08</span>
                <span className="collections-index-card-arrow" aria-hidden="true">↗</span>
                {!ready && <span className="collections-index-coming">COMING SOON</span>}
              </div>
              <div className="collections-index-card-caption">
                <h2>{title}</h2><span>{type}</span>
              </div>
            </>
          );
          return ready ? (
            <a key={id} className="collections-index-card" href={`/collections/${id}`} aria-label={`${title} 상세 페이지`}>{contents}</a>
          ) : (
            <div key={id} className="collections-index-card collections-index-card-unavailable" aria-label={`${title} 준비 중`}>{contents}</div>
          );
        })}
      </section>

      <footer className="collections-index-footer"><span>GO FURTHER OUT WEST</span><a href="/">RETURN TO HOME ↗</a><span>© 2026</span></footer>
    </main>
  );
}
