import { useState } from "react";

import Intro from "./pages/IntroTemp.jsx";
import Home from "./pages/Home.jsx";
import ZionCanyon from "./pages/ZionCanyon.jsx";
import CollectionDetail from "./pages/CollectionDetail.jsx";
import CollectionsIndex from "./pages/CollectionsIndex.jsx";

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const [showIntro, setShowIntro] = useState(pathname === "/");

  // 기존 Zion Canyon 단독 상세 페이지는 그대로 사용
  if (pathname === "/collections/zion-canyon") return <ZionCanyon />;

  // 신규 컬렉션 목록 페이지
  if (pathname === "/collections") return <CollectionsIndex />;

  // 기존 테스트 주소도 그대로 지원
  const preview = pathname.match(/^\/collections-preview\/([^/]+)$/);
  if (preview) return <CollectionDetail collectionId={preview[1]} />;

  // 6개 완성 컬렉션의 실제 URL (Zion은 위에서 처리)
  const detail = pathname.match(/^\/collections\/([^/]+)$/);
  if (detail) return <CollectionDetail collectionId={detail[1]} />;

  return (
    <>
      <Home />
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
    </>
  );
}
