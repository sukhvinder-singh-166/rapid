import React from "react";
import SuccessCard from "../common/SuccessCard";
import { SUCCESS_DATA } from "../common/Helper";

const Success = () => {
  return (
    <>
      <div className="h-1 bg-skin w-full mb-10"></div>
      <div className="container">
        <p className="text-4xl text-white mb-10 font-soehne font-bold text-center">
          Comprehensive Business Solutions for Enduring Success
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
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
    </>
  );
};

export default Success;
