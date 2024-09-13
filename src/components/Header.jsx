import React, { useState } from "react";
import logo from "../assets/images/png/rapid-logo.png";
import { CrossIcon, NavigationLine, PhoneIcon } from "./common/Icons";
import { NAV_LINKS, PHONE_NUMBERS, SOCIAL_LINKS } from "./common/Helper";
import LinkNav from "./common/LinkNav";
import BlueButton from "./common/BlueButton";
import MobileHeader from "./MobileHeader";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="bg-blue sticky top-0 z-50">
      <div className="container relative z-10">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="group">
                <PhoneIcon />
              </span>
              <div className="flex flex-col">
                {PHONE_NUMBERS.map((number, index) => (
                  <a
                    key={index}
                    href={`tel:${number}`}
                    className="text-white text-sm md:text-base font-bold hover:text-skin transition-all duration-300"
                  >
                    {number}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                className="text-white text-base font-bold hover:text-skin transition-all duration-300 group"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-skin h-[2px] w-full relative z-10"></div>
      <div className="container relative z-10">
        <div className="flex justify-between items-center py-5 relative z-10">
          <img
            src={logo}
            alt="logo"
            className="sm:max-w-[150px] max-w-[140px] md:max-w-[206px] max-h-[45px] md:max-h-[60px] w-full h-full"
          />
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link, index) => (
              <LinkNav key={index} link={link} />
            ))}
          </div>
          <div className=" flex items-center gap-4">
            <div className="hidden sm:block">
              <BlueButton title="Consultation" url="/consultation" />
            </div>
            <div
              className="rotate-90 lg:hidden w-full md:min-w-[60px] min-w-10"
              onClick={() => setShowNav(!showNav)}
            >
              {showNav ? <CrossIcon /> : <NavigationLine />}
            </div>
          </div>
        </div>
      </div>
      <MobileHeader showNav={showNav} />
    </div>
  );
};

export default Header;
