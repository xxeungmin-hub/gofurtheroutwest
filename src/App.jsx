
import { useState } from "react";
import Intro from "./pages/IntroTemp.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Home />

      {showIntro && (
        <Intro
          onFinish={() => setShowIntro(false)}
        />
      )}
    </>
  );
}
