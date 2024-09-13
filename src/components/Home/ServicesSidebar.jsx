import React, { useState } from "react";
import { SERVICES_SIDEBAR_OPTIONS } from "../common/Helper";
import { ArrowRightIcon } from "../common/Icons";
import Faq from "./Faq";

const ServicesSidebar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const OptionClickHandler = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div className="w-[30%] border-white border-[3px] p-4 h-ful">
      <p className="text-white text-3xl font-bold text-center mb-10">
        Our Services
      </p>
      <Faq />
    </div>
  );
};

export default ServicesSidebar;
