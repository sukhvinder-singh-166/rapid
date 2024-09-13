import React from "react";
import { NAV_LINKS } from "./common/Helper";
import LinkNav from "./common/LinkNav";
import BlueButton from "./common/BlueButton";

const MobileHeader = ({ showNav }) => {
  return (
    <div
      className={`w-full h-screen bg-blue flex flex-col justify-center items-center gap-5 transition-all duration-500 top-0 fixed ${
        showNav ? "start-0" : "-start-full"
      }`}
    >
      {NAV_LINKS.map((link, index) => (
        <LinkNav key={index} link={link} />
      ))}
      <BlueButton title="Consultation" url="/consultation" />
    </div>
  );
};

export default MobileHeader;
