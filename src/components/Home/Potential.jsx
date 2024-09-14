import React from "react";
import PotentialCard from "../common/PotentialCard";
import { POTENTIAL_CARDS } from "../common/Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
const Potential = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="bg-blue pb-10 pt-20">
      <div className="container">
        <p className="md:text-custom-8xl text-custom-4xl font-soehne font-bold text-white leading-[110%] text-center sm:mb-10 mb-5">
          Unlock your full potential
        </p>

        <Swiper
          slidesPerView={3}
          className="transition-all duration-300"
          grabCursor={true}
          a11y={false}
          freeMode={true}
          speed={11000}
          loop={true}
          autoplay={{
            delay: 0.5,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // When the window is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // When the window is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {POTENTIAL_CARDS.map((obj, index) => (
            <SwiperSlide key={index}>
              <PotentialCard {...obj} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Potential;
