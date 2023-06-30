import React, { memo, useEffect } from "react";
import { useCallback } from "react";

import ParticlesBg from "../ParticlesBg/ParticlesBg";
import { useElementSize } from "usehooks-ts";

interface IHero {
  setHeroHeight: (value: number) => void;
}

const Hero: React.FC<IHero> = ({ setHeroHeight }) => {
  const [refContainer, { height }] = useElementSize();

  const handleHeroHeight = useCallback(() => {
    setHeroHeight(height);
  }, [height, setHeroHeight]);

  useEffect(() => {
    handleHeroHeight();
  }, [handleHeroHeight]);

  return (
    <section
      className="hero min-h-screen flex justify-center items-center"
      ref={refContainer}
      id="home"
    >
      <div className="w-full h-screen absolute left-0 top-0 -z-0">
        <ParticlesBg />
      </div>
      <div className="relative z-10 mobmenu:max-w-2xl text-xl text-[#e8e7e7] flex gap-6 flex-col-reverse justify-center items-center text-center mobmenu:flex-row mobmenu:text-left  ">
        <div className="">
          <h3 className="text-5xl">
            Front-End React <br /> Developer
          </h3>{" "}
          <h3 className="mt-4">
            My name is{" "}
            <span className="text-[#46C2CB] font-medium">
              Vladyslav Lisovskyi
            </span>{" "}
            and I'm Front-End React Developer based in Kyiv, Ukraine 📍
          </h3>
        </div>

        <img className="w-36 h-36" src="./hacker.svg" alt="" loading="lazy" />
      </div>
    </section>
  );
};

export default memo(Hero);
