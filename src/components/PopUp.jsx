import React, { useEffect, useState } from "react";
import { PopUpCrossIcon } from "./common/Icons";
import BlueButton from "./common/BlueButton";
import { SOCIAL_LINKS } from "./common/Helper";

const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowPopUp(true);
    }, 1000);
  }, []);
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {showPopUp && (
        <div
          className="w-full h-full fixed top-0 left-0 z-[60]"
          onClick={() => setShowPopUp(false)}
        ></div>
      )}
      <div
        className={`bg-skin z-[61] w-full h-full max-w-[500px] translate-x-[-50%] translate-y-[-50%] start-[50%]  max-h-[500px] rounded-md fixed transition-all duration-300 ${
          showPopUp ? "top-[50%]" : "top-[-100%]"
        }`}
      >
        <div className="w-full h-full relative p-5">
          <span
            className="absolute top-[-20px] right-[-20px] w-full max-w-10 cursor-pointer"
            onClick={() => setShowPopUp(false)}
          >
            <PopUpCrossIcon />
          </span>
          <p className=" text-blue font-semibold text-center text-3xl">
            Rapid Consulting
          </p>
          <form className=" mt-5 gap-5 flex flex-col">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full h-10 border border-blue bg-transparent px-2 text-blue focus:outline-none placeholder:text-blue text-xl border-b-2 border-t-0 border-l-0 border-r-0"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-10 border border-blue bg-transparent px-2 text-blue focus:outline-none placeholder:text-blue text-xl border-b-2 border-t-0 border-l-0 border-r-0"
            />
            <input
              type="number"
              placeholder="Enter your phone number"
              className="w-full h-10 border border-blue bg-transparent px-2 text-blue focus:outline-none placeholder:text-blue text-xl border-b-2 border-t-0 border-l-0 border-r-0"
            />
            <BlueButton title="Submit" type="blue" onClick={formSubmit} />
          </form>
          <div className="flex items-center gap-2 md:gap-4 mt-5 justify-center">
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                className="text-white text-base font-bold hover:text-skin transition-all duration-300 group"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
