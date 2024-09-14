import React, { useState } from "react";
import Faq from "./Faq";

const ServicesSidebar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const OptionClickHandler = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div className="lg:w-[30%] w-full border-white border-[3px] p-4 h-full lg:h-auto">
      <p className="text-white text-3xl font-bold text-center lg:mb-10 md:mb-5 mb-2">
        Our Services
      </p>
      <Faq />
    </div>
  );
};

export default ServicesSidebar;
