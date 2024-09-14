import React, { useEffect, useState } from "react";
import { PopUpCrossIcon } from "./common/Icons";
import BlueButton from "./common/BlueButton";
import { SOCIAL_LINKS } from "./common/Helper";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    setTimeout(() => {
      setShowPopUp(true);
      if (showPopUp) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, 1000);
  }, []);
  const formSubmit = (e) => {
    e.preventDefault();

    if (
      contactDetails.name !== "" &&
      contactDetails.email !== "" &&
      contactDetails.phone !== ""
    ) {
      // EmailJS parameters
      const templateParams = {
        from_name: contactDetails.name,
        from_email: contactDetails.email,
        phone: contactDetails.phone,
      };

      // Send email using EmailJS
      emailjs
        .send(
          "service_rhvi6ne", // Replace with your EmailJS Service ID
          "template_58ki8ys", // Replace with your EmailJS Template ID
          templateParams,
          "VdFIJa-Q4kIcZzKM7" // Replace with your EmailJS User ID
        )
        .then(
          (result) => {
            toast.success("Form submitted and email sent successfully");
          },
          (error) => {
            toast.error("Failed to send the email");
          }
        );

      setContactDetails({
        name: "",
        email: "",
        phone: "",
      });
    } else {
      toast.error("Please fill all the fields");
    }
  };
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        closeOnClick={false}
        className="!right-0 bottom-0 w-full max-w-[300px] md:max-w-[500px]"
      />
      {showPopUp && (
        <div
          className="w-full h-full fixed top-0 left-0 z-[60]"
          onClick={() => setShowPopUp(false)}
        ></div>
      )}
      <div
        className={`bg-skin z-[61] w-full h-full max-w-[300px] md:max-w-[500px] end-0 md:max-h-[600px] max-h-[400px] rounded-md fixed transition-all duration-300 ${
          showPopUp ? "top-0" : "top-[-100%]"
        }`}
      >
        <div className="w-full h-full relative p-5 !pt-10">
          <span
            className="absolute top-1 right-1 w-full max-w-10 cursor-pointer"
            onClick={() => setShowPopUp(false)}
          >
            <PopUpCrossIcon />
          </span>
          <p className=" text-blue font-semibold text-center text-2xl md:text-3xl">
            Rapid Consulting
          </p>
          <form className=" mt-5 gap-5 flex flex-col">
            <input
              type="text"
              value={contactDetails.name}
              onChange={(e) =>
                setContactDetails({ ...contactDetails, name: e.target.value })
              }
              placeholder="Enter your name"
              className="w-full h-10 border border-blue bg-transparent px-2 text-blue focus:outline-none placeholder:text-blue text-lg md:text-xl border-b-2 border-t-0 border-l-0 border-r-0"
            />
            <input
              type="email"
              value={contactDetails.email}
              onChange={(e) =>
                setContactDetails({ ...contactDetails, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full h-10 border border-blue bg-transparent px-2 text-blue focus:outline-none placeholder:text-blue text-lg md:text-xl border-b-2 border-t-0 border-l-0 border-r-0"
            />
            <input
              type="number"
              value={contactDetails.phone}
              onChange={(e) =>
                setContactDetails({ ...contactDetails, phone: e.target.value })
              }
              placeholder="Enter your phone number"
              className="w-full h-10 border border-blue bg-transparent px-2 text-blue focus:outline-none placeholder:text-blue text-lg md:text-xl border-b-2 border-t-0 border-l-0 border-r-0"
            />
            <BlueButton title="Submit" type="blue" onClick={formSubmit} />
          </form>
          <div className="flex items-center gap-2 md:gap-4 mt-5 justify-center">
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
    </>
  );
};

export default PopUp;
