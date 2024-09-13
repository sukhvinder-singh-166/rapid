import React, { useState } from "react";
import LinkOptions from "../LinkOptions";
import { ArrowRightIcon } from "./Icons";
import { useLocation } from "react-router-dom";

const LinkNav = ({ link, index }) => {
  const URL = useLocation();
  const pathname = URL.pathname;
  const [showOptions, setShowOptions] = useState(false);

  const OptionClickHandler = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      {showOptions && (
        <div
          className="bg-black/50 w-screen h-screen fixed start-0 top-0"
          onClick={OptionClickHandler}
        ></div>
      )}
      {link.url ? (
        <a
          key={index}
          href={link.url}
          className={`text-sm uppercase md:text-base font-bold text-white before:absolute before:-bottom-2 before:start-[50%] hover:before:start-0 hover:before:w-full before:w-0 before:h-[2px] before:bg-white transition-all duration-500 before:transition-all before:ease-in-out before:duration-300 flex gap-2 items-center relative group ${
            pathname === link.url && "before:!w-full before:!start-0"
          }`}
          onClick={() => setShowOptions(false)}
        >
          {link.name}
        </a>
      ) : (
        <button
          key={index}
          className="text-sm uppercase md:text-base font-bold text-white before:absolute before:-bottom-2 before:start-[50%] hover:before:start-0 hover:before:w-full before:w-0 before:h-[2px] before:bg-white transition-all duration-500 before:transition-all before:ease-in-out before:duration-300 flex gap-2 items-center relative group"
          onClick={OptionClickHandler}
        >
          {link.name}
          {link.options && (
            <span
              className={`absolute top-[50%] translate-y-[-50%] -right-4 transition-all duration-500 ${
                showOptions ? "rotate-180" : "rotate-0"
              }`}
            >
              <ArrowRightIcon />
            </span>
          )}
          {showOptions && (
            <LinkOptions
              options={link.options}
              OptionClickHandler={OptionClickHandler}
            />
          )}
        </button>
      )}
    </>
  );
};

export default LinkNav;
