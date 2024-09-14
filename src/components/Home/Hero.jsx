import React from "react";
import BlueButton from "../common/BlueButton";
import { EMAIL_TO } from "../../utils/constant";
import PartnerSlider from "../common/PartnerSlider";
const Hero = () => {
  return (
    <>
      <div className="w-full h-full flex flex-wrap container flex-grow-[1] lg:py-3 md:py-10 py-20 items-center md:mt-[100px] mt-[160px]">
        <div className="w-full lg:ps-5 pt-10 h-full flex flex-col justify-end items-center mx-auto text-center">
          <p className="lg:text-custom-12xl md:text-custom-8xl text-custom-4xl font-soehne font-bold text-white leading-[110%]">
            Meet the Strategists Fueling Your Business Excellence
          </p>
          <p className=" text-white lg:text-custom-4xl md:text-custom-3xl text-2xl font-normal italic pt-4">
            Advancing Businesses with Precision
          </p>
          <div className=" flex items-center justify-between md:pt-8 pt-5">
            <BlueButton title={"Contact Us"} url={EMAIL_TO} />
          </div>
        </div>
      </div>
      <PartnerSlider />
    </>
  );
};

export default Hero;
