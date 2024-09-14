import React from "react";

const BlueButton = ({ url, title, type, onClick }) => {
  return (
    <>
      {url ? (
        <a
          href={url}
          className={`bg-skin text-white px-4 py-3 rounded-md text-semibold tracking-widest hover:text-skin overflow-hidden group relative transition-all duration-300 after:absolute after:bottom-0 after:start-[50%] after:translate-[-50%] after:top-[50%]  after:w-0 after:h-0 hover:after:w-full hover:after:top-0 hover:after:start-0 hover:after:h-full after:bg-white after:transition-all after:duration-300 after:ease-in-out after:rounded-md block border border-transparent ${
            type === "blue" ? "!bg-blue hover:!text-blue hover:border-blue" : "bg-skin"
          }`}
        >
          <span className="relative z-10">{title}</span>
        </a>
      ) : (
        <button
          className={`text-white px-4 py-3 rounded-md text-semibold tracking-widest hover:text-skin overflow-hidden group relative transition-all duration-300 after:absolute after:bottom-0 after:start-[50%] after:translate-[-50%] after:top-[50%]  after:w-0 after:h-0 hover:after:w-full hover:after:top-0 hover:after:start-0 hover:after:h-full after:bg-white after:transition-all after:duration-300 after:ease-in-out after:rounded-md block ${
            type === "blue" ? "!bg-blue" : "bg-skin"
          }`}
          onClick={onClick}
        >
          <span className="relative z-10">{title}</span>
        </button>
      )}
    </>
  );
};

export default BlueButton;
