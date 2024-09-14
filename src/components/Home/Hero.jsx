import React from "react";
import ServicesSidebar from "./ServicesSidebar";
import BlueButton from "../common/BlueButton";
const Hero = () => {
  return (
    <div className="w-full h-full flex flex-wrap container flex-grow-[1] lg:py-3 py-10">
      <ServicesSidebar />
      <div className="lg:w-[70%] w-full lg:ps-5 pt-10 h-full flex flex-col justify-end">
        <p className="lg:text-6xl md:text-5xl text-4xl font-bold text-white leading-[110%]">
          Meet the Strategists
        </p>
        <p className="lg:text-6xl md:text-5xl text-4xl font-medium text-white mt-2 leading-[110%]">
          Fueling Your Business Excellence
        </p>
        <p className=" text-white font-normal italic pt-4">
          Advancing Businesses with Precision
        </p>
        <div className=" flex items-center justify-between md:pt-10 pt-5">
          <BlueButton title={"Explore"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
