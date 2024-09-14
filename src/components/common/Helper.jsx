import { EMAIL_TO, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, NUMBER_1, YOUTUBE_URL } from "../../utils/constant";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "./Icons";
// mobile numbers
export const PHONE_NUMBERS = [NUMBER_1, NUMBER_1];
// social links
export const SOCIAL_LINKS = [
  {
    icon: <EmailIcon />,
    url: EMAIL_TO,
  },
  {
    icon: <FacebookIcon />,
    url: FACEBOOK_URL,
  },
  {
    icon: <YoutubeIcon />,
    url: YOUTUBE_URL,
  },
  {
    icon: <InstagramIcon />,
    url: INSTAGRAM_URL,
  },
  {
    icon: <LinkedinIcon />,
    url: LINKEDIN_URL,
  },
];
// nav links
export const NAV_LINKS = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Solutions",
    url: "/about",
  },
  {
    name: "Services",
    // options: [
    //   {
    //     name: "MSME Subsidy",
    //   },
    //   {
    //     name: "CLU/NOC & Approvals",
    //   },
    //   {
    //     name: "Registration & certification",
    //   },
    //   {
    //     name: "Others Services",
    //   },
    // ],
  },
  {
    name: "About",
    url: "/about-us",
  },
];

// SERVICES SIDEBAR OPTIONS
export const SERVICES_SIDEBAR_OPTIONS = [
  {
    name: "MSME Subsidy",
  },
  {
    name: "CLU/NOC & Approvals",
  },
  {
    name: "Registration & certification",
  },
  {
    name: "Others Services",
  },
];
export const FAQ_LIST = [
  {
    title: "MSME Subsidy",
    description: [
      {
        option: "Pradhan Mantri Mudra Yojana",
        url: "/",
      },
      {
        option: "Prime Minister’s Employment Generation Programme",
        url: "/",
      },
      {
        option: "Credit Guarantee Trust Fund for Micro & Small Enterprises",
        url: "/",
      },
    ],
  },
  {
    title: "CLU/NOC & Approvals",
    description: [
      {
        option: "Financial managers",
        url: "/",
      },
      {
        option: "Human resources managers",
        url: "/",
      },
      {
        option: "Purchasing managers",
        url: "/",
      },
    ],
  },
  {
    title: "Registration & certification",
    description: [
      {
        option: "Agriculture, Food & Natural Resources",
        url: "/",
      },
      {
        option: "Architecture & Construction",
        url: "/",
      },
      {
        option: "Arts, A/V Technology & Communication",
        url: "/",
      },
    ],
  },
  {
    title: "Others Services",
    description: [
      {
        option: "Others Services",
        url: "/",
      },
      {
        option: "Others Services",
        url: "/",
      },
      {
        option: "Others Services",
        url: "/",
      },
    ],
  },
];
