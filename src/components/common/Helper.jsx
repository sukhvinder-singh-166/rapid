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
    options: [
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
    ],
  },
  {
    name: "About",
    url: "/about-us",
  },
];
