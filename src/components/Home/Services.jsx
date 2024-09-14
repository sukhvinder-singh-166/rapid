"use client";
import React, { useState, useRef, useEffect } from "react";
import gamePlayImage1 from "../../assets/images/png/msme.jpg";
import gamePlayImage2 from "../../assets/images/png/noc.jpg";
import gamePlayImage3 from "../../assets/images/png/rto.jpg";
import gamePlayImage4 from "../../assets/images/png/other-services.jpg";
import { FaqArrow, FaqDotIcon } from "../common/Icons";
import { FAQ_LIST } from "../common/Helper";
const gameImages = [
  gamePlayImage1,
  gamePlayImage2,
  gamePlayImage3,
  gamePlayImage4,
];
const Services = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          activeIndex === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [activeIndex]);
  return (
    <div className="overflow-hidden py-16 sm:py-20 lg:py-[128px] bg-blue mt-[-1px] relative">
      <p className="lg:text-custom-12xl md:text-custom-8xl text-5xl relative z-[5] font-soehne font-bold text-skin leading-[110%] text-center">
        Services
      </p>
      <div className="container max-w-[1180px]">
        <div className="flex justify-between flex-col-reverse lg:flex-row sm:pt-10 pt-5 lg:pt-20">
          <div className="lg:w-[42%] pt-6 md:pt-10 lg:pt-0 relative">
            {FAQ_LIST.map((obj, index) => (
              <div
                key={index}
                onClick={() => toggleAccordion(index)}
                className="overflow-hidden transition-all duration-300 py-[22px] rounded-[10px] mt-4 border border-white bg-skin"
              >
                <button className="w-full text-left px-4 focus:outline-none transition duration-300 ease-in-out flex justify-between items-center">
                  <span className="text-xl md:text-2xl font-bold text-white ff_orbitron">
                    {obj.title}
                  </span>
                  <FaqArrow isActive={activeIndex === index} />
                </button>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className={` overflow-hidden transition-max-height duration-300 ease-in-out px-4  ${
                    index === activeIndex
                      ? " opacity-100 translate-y-0 "
                      : "opacity-0 translate-y-10"
                  }  duration-700`}
                  style={{ maxHeight: activeIndex === index ? "auto" : "0px" }}
                >
                  {obj.description.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      className={`text-xl md:text-2xl text-white pt-5 hover:text-blue transition-all duration-300 leading-[31px] flex ${
                        index === activeIndex ? " opacity-100 mb-0" : ""
                      } transition-all duration-700`}
                    >
                      <span className="pt-[6px] pe-2">
                        <FaqDotIcon />
                      </span>
                      <p>{item.option}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-[60%] lg:w-[52%] mx-auto lg:mx-0 flex justify-center items-center relative lg:mb-0 sm:mb-10 mb-0">
            {gameImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="gameplay-img"
                className={` transition-all duration-500 ease-linear rounded-lg ${
                  activeIndex === i
                    ? " !opacity-100 scale-100"
                    : "opacity-0 scale-75"
                } ${i !== 0 ? "absolute" : "relative"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
