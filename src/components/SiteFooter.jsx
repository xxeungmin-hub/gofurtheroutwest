import "../styles/PosterExtras.css";

export default function SiteFooter() {
  return (
    <footer className="gfw-site-footer" id="site-footer">
      <div className="gfw-footer-top">
        <span>GOFURTHEROUTWEST®</span>
        <nav aria-label="Footer navigation"><a href="/collections">COLLECTIONS ↗</a><a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>BACK TO TOP ↑</a></nav>
      </div>
      <p className="gfw-footer-tagline">RECORDED SOMEWHERE<br />BEYOND THE WEST.</p>
      <img className="gfw-footer-wordmark" src="/images/main-title.svg" alt="GoFurtherOutWest" />
      <div className="gfw-footer-bottom"><span>© {new Date().getFullYear()} GOFURTHEROUTWEST. ALL RIGHTS RESERVED.</span><span>AN EXPERIMENTAL WESTERN LIFESTYLE BRAND</span></div>
    </footer>
  );
}
