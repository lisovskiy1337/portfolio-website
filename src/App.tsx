import React, { lazy, useState } from "react";

const LazyHeader = lazy(() => import("./components/Header/Header"));
const LazyAbout = lazy(() => import("./components/About/About"));
const LazyContact = lazy(() => import("./components/Contact/Contact"));
const LazyPortfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const LazyFooter = lazy(() => import("./components/Footer/Footer"));
const LazyHero = lazy(() => import("./components/Hero/Hero"));
function App() {
  const [heroHeight, setHeroHeight] = useState<number>(0);

  return (
    <>
      <LazyHeader heroHeight={heroHeight} />
      <main>
        <LazyHero setHeroHeight={setHeroHeight} />
        <LazyAbout />
        <LazyPortfolio />
        <LazyContact />
      </main>
      <LazyFooter />
    </>
  );
}

export default App;
