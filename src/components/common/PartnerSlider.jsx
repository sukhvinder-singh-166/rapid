import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

const PartnerSlider = ({ ARRAY, className }) => {
  SwiperCore.use([Autoplay]);

  return (
    <div
      className={`${className} bg-white flex items-center w-full py-5 max-h-[350px]`}
    >
      <div className="!max-w-[1920px] container">
        <Swiper
          slidesPerView={6}
          className="transition-all duration-300"
          spaceBetween={40}
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
            // When the window is >= 768px
            768: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            // When the window is >= 1024px
          }}
        >
          {ARRAY.map((partner, index) => (
            <SwiperSlide key={index}>
              <img
                className={`max-h-[180px] object-contain ${
                  partner.name === "BANK OF INDIA"
                    ? " translate-y-[-10px]"
                    : "translate-y-0"
                }`}
                src={partner.image}
                alt={partner.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerSlider;
