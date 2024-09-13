import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "./Icons";
// mobile numbers
export const PHONE_NUMBERS = ["+91 94672 48028", "+91 94672 48028"];
// social links
export const SOCIAL_LINKS = [
  {
    icon: <EmailIcon />,
    url: "mailto:info@rapidconsulting.in",
  },
  {
    icon: <FacebookIcon />,
    url: "https://www.facebook.com/rapidconsultingindia/",
  },
  {
    icon: <YoutubeIcon />,
    url: "https://www.youtube.com/@rapidconsultingindia",
  },
  {
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/rapidconsulting",
  },
  {
    icon: <LinkedinIcon />,
    url: "https://www.linkedin.com/company/rapidconsultingindia/",
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
