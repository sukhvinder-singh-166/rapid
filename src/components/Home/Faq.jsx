import React, { useState } from "react"; // Importing React and useState hook
import { ArrowRightIcon } from "../common/Icons";
import { FAQ_LIST } from "../common/Helper";

// Faq component definition
const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // State to track expanded accordion item index

  // Function to toggle accordion items
  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {FAQ_LIST.map((obj, index) => (
        <div key={index}>
          {/* Accordion item container */}

          {/* Accordion button */}
          <button
            type="button"
            className="text-white text-xl font-bold flex justify-between items-center w-full text-start pt-5"
            onClick={() => toggleAccordion(index)}
            aria-expanded={expandedIndex === index}
            aria-controls={`faqs-text-${index}`}
          >
            {obj.title}
            <span
              className={`transition-all duration-300 ease-in-out ${
                expandedIndex === index ? "rotate-90" : ""
              }`}
            >
              <ArrowRightIcon />
            </span>
          </button>
          {/* Accordion content */}
          <div
            id={`faqs-text-${index}`}
            role="region"
            aria-labelledby={`faqs-title-${index}`}
            className={`grid text-sm text-slate-600  overflow-hidden transition-all duration-300 ease-in-out ${
              expandedIndex === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            {/* Description of the accordion item */}
            <div className="overflow-hidden flex flex-col gap-2">
              {obj.description.map((subObj, subIndex) => {
                return (
                  <a
                    href={subObj.url}
                    key={subIndex}
                    className="font-medium pt-2 text-sm transition-all duration-300 hover:text-skin text-white"
                  >
                    {subObj.option}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq; // Exporting Faq component
