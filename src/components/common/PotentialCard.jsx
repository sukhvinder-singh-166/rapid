import React from "react";
const PotentialCard = ({ image, title, description, url, className }) => {
  return (
    <div
      className={`${className} pt-10 pb-[35px] md:pb-[46px] lg:pb-10`}
    >
      <a
        href={url}
        className="border block border-black-light group rounded-xl overflow-hidden hover:shadow-latest-shadow transition-all ease-in-out duration-300"
      >
        {/* image */}
        <img
          src={image}
          alt="potential-img"
          className="w-full sm:max-h-[162px] group-hover:scale-110 transition-all ease-in-out duration-300 max-h-[300px] object-cover lg:max-h-[213px]"
        />
        <div className="sm:pt-5 sm:px-[0.94rem] p-3 sm:pb-4 bg-white">
          {/* title */}
          <p className="font-semibold text-2xl text-blue capitalize max-w-[327px] mb-2">
            {title}
          </p>
          {/* description */}
          <p className="text-blue opacity-70 font-normal text-base">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default PotentialCard;
