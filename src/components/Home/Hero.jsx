import React from "react";
import ServicesSidebar from "./ServicesSidebar";
import BlueButton from "../common/BlueButton";
const Hero = () => {
  return (
    <div className="w-full h-full flex container flex-grow-[1] py-3">
      <ServicesSidebar />
      <div className="w-[70%] ps-5 pt-10 h-full flex flex-col justify-end">
        <p className="text-6xl font-bold text-white leading-[110%]">
          Meet the Strategists
        </p>
        <p className="text-6xl font-medium text-white mt-2 leading-[110%]">
          Fueling Your Business Excellence
        </p>
        <p className=" text-white font-normal italic pt-4">
          Advancing Businesses with Precision
        </p>
        <div className=" flex items-center justify-between pt-10">
          <BlueButton title={"Explore"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
