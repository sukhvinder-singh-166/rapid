import React from "react";
import SuccessCard from "../common/SuccessCard";
import { SUCCESS_DATA } from "../common/Helper";

const Success = () => {
  return (
    <>
      <div className="relative">
        <div className="h-full bg-skin w-full mb-10 absolute top-0 left-0"></div>
        <div className="container lg:py-[100px] py-[50px] relative z-[1]">
          <p className="md:text-5xl text-3xl text-blue mb-10 font-soehne font-bold text-center">
            Comprehensive Business Solutions for Enduring Success
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:text-start text-center">
            {SUCCESS_DATA.map((obj, index) => {
              return (
                <SuccessCard
                  key={index}
                  title={obj.title}
                  description={obj.description}
                  url={obj.url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
