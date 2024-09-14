import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

const PartnerSlider = () => {
  SwiperCore.use([Autoplay]);
  const PARTNERS = [
    {
      image:
        "https://cdn.prod.website-files.com/65adf633c21f42172846b2bf/65be30f1f4d75747598728b2_4.png",
      name: "HDFC",
    },
    {
      image:
        "https://cdn.prod.website-files.com/65adf633c21f42172846b2bf/65be3108723a4b7094e40565_3.png",
      name: "AXIS",
    },
    {
      image:
        "https://cdn.prod.website-files.com/65adf633c21f42172846b2bf/65be3108b7940f23e554c8cf_5.png",
      name: "BANK OF INDIA",
    },
    {
      image:
        "https://cdn.prod.website-files.com/65adf633c21f42172846b2bf/65be3127a9d744382c197f40_2.png",
      name: "KOTAK",
    },
    {
      image:
        "https://cdn.prod.website-files.com/65adf633c21f42172846b2bf/65be3127434c0bd6b0e7f9fa_1.png",
      name: "PUNJAB NATIONAL",
    },
    {
      image:
        "https://cdn.prod.website-files.com/65adf633c21f42172846b2bf/65be30f1f4d75747598728b2_4.png",
      name: "HDFC",
    },
    {
      image:
        "https://cdn.prod.website-files.com/65adf633c21f42172846b2bf/65be3108723a4b7094e40565_3.png",
      name: "AXIS",
    },
    {
      image:
        "https://cdn.prod.website-files.com/65adf633c21f42172846b2bf/65be3108b7940f23e554c8cf_5.png",
      name: "BANK OF INDIA",
    },
    {
      image:
        "https://cdn.prod.website-files.com/65adf633c21f42172846b2bf/65be3127a9d744382c197f40_2.png",
      name: "KOTAK",
    },
    {
      image:
        "https://cdn.prod.website-files.com/65adf633c21f42172846b2bf/65be3127434c0bd6b0e7f9fa_1.png",
      name: "PUNJAB NATIONAL",
    },
  ];
  return (
    <div className="bg-white flex items-center w-full max-h-[200px]">
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
          {PARTNERS.map((partner, index) => (
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
