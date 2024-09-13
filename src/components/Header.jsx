import React from "react";
import logo from "../assets/images/png/rapid-logo.png";
import { PhoneIcon } from "./common/Icons";
import { NAV_LINKS, PHONE_NUMBERS, SOCIAL_LINKS } from "./common/Helper";
import LinkNav from "./common/LinkNav";
const Header = () => {
  return (
    <div className="bg-blue sticky top-0 z-50">
      <div className="container">
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
      <div className="bg-skin h-[2px] w-full"></div>
      <div className="container">
        <div className="flex justify-between items-center py-5">
          <img
            src={logo}
            alt="logo"
            className="max-w-[150px] md:max-w-[206px] max-h-[45px] md:max-h-[60px] w-full h-full"
          />
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link, index) => (
              <LinkNav key={index} link={link} />
            ))}
          </div>
          <button>login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
