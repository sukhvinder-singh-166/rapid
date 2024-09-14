import React, { useState } from "react";
import { FAQ_LIST } from "../common/Helper";
import { FaqArrow, FaqDotIcon } from "../common/Icons";

const ServicesDropdown = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container relative z-10 mb-10 md:mt-0 mt-10">
      <div className=" flex flex-wrap items-start sm:absolute top-0 left-0">
        {FAQ_LIST.map((obj, index) => (
          <div className="lg:w-3/12 sm:w-6/12 w-full px-2">
            {" "}
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className="overflow-hidden transition-all duration-300 py-4 rounded-[10px] mt-4 border border-white bg-skin"
            >
              <button className="w-full text-left px-2 focus:outline-none transition duration-300 ease-in-out flex justify-between items-center">
                <span className="text-base font-bold text-white text-nowrap">
                  {obj.title}
                </span>
                <FaqArrow isActive={activeIndex === index} />
              </button>
              <div
                className={`transition-all ease-in-out px-4 ${
                  index === activeIndex
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
                style={{
                  transition: "max-height 0.5s ease, opacity 0.5s ease",
                }}
              >
                {obj.description.map((item, idx) => (
                  <a
                    href={item.url}
                    key={idx}
                    className="text-base leading-[140%] text-white pt-5 hover:text-blue transition-all duration-300 flex"
                  >
                    <span className="pt-[6px] pe-2">
                      <FaqDotIcon />
                    </span>
                    <p>{item.option}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesDropdown;
