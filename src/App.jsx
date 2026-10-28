
import { useState } from "react";

import Intro from "./pages/IntroTemp.jsx";
import Home from "./pages/Home.jsx";
import ZionCanyon from "./pages/ZionCanyon.jsx";
import CollectionDetail from "./pages/CollectionDetail.jsx";

export default function App() {
  const [showIntro, setShowIntro] = useState(
    window.location.pathname === "/"
  );

  const pathname = window.location.pathname;

  // 기존 Zion Canyon 상세 페이지
  const isZionPage =
    pathname === "/collections/zion-canyon";

  // 새 공통 템플릿 테스트 주소
  // 예: /collections-preview/zion-canyon
  const previewMatch = pathname.match(
    /^\/collections-preview\/([^/]+)\/?$/
  );

  // 테스트 페이지
  if (previewMatch) {
    return (
      <CollectionDetail
        collectionId={previewMatch[1]}
      />
    );
  }

  return (
    <>
      {isZionPage ? <ZionCanyon /> : <Home />}

      {!isZionPage && showIntro && (
        <Intro onFinish={() => setShowIntro(false)} />
      )}
    </>
  );
}
