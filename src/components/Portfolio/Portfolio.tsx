import React, { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { portfolioData } from "../../data";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const updateIndex = (swiperInstance: SwiperType) => {
    if (swiperInstance === null) return;
    const currentSlide = swiperInstance?.realIndex;
    setCurrentIndex(currentSlide);
  };
  const { title, text, technologies } = portfolioData[currentIndex].body;
  return (
    <section id="portfolio">
      <div className="container">
        <h3 className="text-4xl mb-12 text-center">Portfolio</h3>
        <h4 className="text-lg text-center mb-4 font-medium">
          {currentIndex + 1}/{portfolioData.length}
        </h4>
        <div className=" lg:flex lg:gap-10 lg:items-center ">
          <div className="flex-[1_1_80%] min-h-[13rem]">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p>{text}</p>
            <p className="font-medium mt-2">
              Technologies used: {technologies}
            </p>
          </div>
          <Swiper
            initialSlide={currentIndex}
            onActiveIndexChange={updateIndex}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: false,
            }}
            slidesPerView={3}
            centeredSlides
            loop={true}
            modules={[EffectCoverflow]}
            observer={true}
            observeParents={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            className="mt-6 lg:mt-0"
          >
            {portfolioData.map((slide) => (
              <SwiperSlide key={slide.id} className="">
                <a href={slide.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`./images/slider/${slide.img}`}
                    alt="slider"
                    className="w-full"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default memo(Portfolio);
