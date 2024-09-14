import React from "react";
import PartnerSlider from "../common/PartnerSlider";
import { CLIENTS } from "../common/Helper";

const Clients = () => {
  return (
    <div className="bg-skin">
      <div className="container !px-0 !max-w-[1920px] pt-10 pb-5">
        <p className="md:text-custom-8xl text-custom-4xl font-soehne font-bold text-white leading-[110%] text-center">
          Meet Our Clients
        </p>
        <PartnerSlider className="!bg-skin" ARRAY={CLIENTS} />
      </div>
    </div>
  );
};

export default Clients;
