import React from "react";

const LinkOptions = ({ options, OptionClickHandler }) => {
  return (
    <div className="bg-skin absolute top-10 p-4 !pe-6 rounded-md flex flex-col gap-3 items-start">
      {options.map((option, index) => (
        <>
          <button
            key={index}
            onClick={OptionClickHandler}
            className="text-white text-sm text-nowrap hover:text-blue transition-all duration-500 uppercase z-10"
          >
            {option.name}
          </button>
          {index !== options.length - 1 && (
            <div className="h-[1px] w-full bg-white"></div>
          )}
        </>
      ))}
    </div>
  );
};

export default LinkOptions;
