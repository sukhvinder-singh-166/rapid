import React, { useState } from "react";
import { SERVICES_SIDEBAR_OPTIONS } from "../common/Helper";
import { ArrowRightIcon } from "../common/Icons";

const ServicesSidebar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const OptionClickHandler = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div className="w-[30%] border-white h-screen border-[3px] p-4">
      <p className="text-white text-3xl font-bold text-center mb-10">
        Our Services
      </p>
      <div className="flex flex-col gap-4 justify-start items-start">
        {SERVICES_SIDEBAR_OPTIONS.map((option, index) => (
          <button key={index} className="text-white text-xl font-bold flex justify-between items-center w-full">
            {option.name}
            <span className="rotate-90">
              <ArrowRightIcon />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServicesSidebar;
