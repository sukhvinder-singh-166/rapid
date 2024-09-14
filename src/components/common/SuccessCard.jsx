import React from "react";
import BlueButton from "./BlueButton";

const SuccessCard = ({title, description, url}) => {
  return (
    <a
      href="/"
      className="bg-[url('https://cdn.prod.website-files.com/65adf633c21f42172846b2bf/65b6a0b0d4f7ba472364edfe_Rapid-Consulting-Office-4.webp')] w-full group hover:transition-all duration-300 ease-in-out lg:pl-7 lg:pr-7 lg:pt-48 items-end p-7 flex relative bg-cover bg-center"
    >
      <div className="w-full rounded-3xl px-6 md:px-7 py-9 bg-white transition duration-300 group-hover:bg-tealBlue h-full justify-between relative drop-shadow-md xl:min-h-[326px] z-10 flex flex-col gap-4">
        <p className="lg:text-xl text-base font-bold text-skin">
          {title}
        </p>
        <p className="lg:text-xl text-base font-bold text-blue">
          {description}
        </p>
        <BlueButton title={"Read More"} url={url} type="blue" />
      </div>
    </a>
  );
};

export default SuccessCard;
