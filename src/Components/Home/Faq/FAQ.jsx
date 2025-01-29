import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import "../Faq/FAQ.css"

function FAQ() {
  // State to track the currently open FAQ
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  // Function to toggle a specific FAQ
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // FAQ data
  const faqs = [
    {
      question: "What is My Hear Space?",
      answer:
        "My Hear Space is a platform designed to provide personalized audio experiences, offering various features for music and podcast lovers.",
    },
    {
      question: " Is my identity kept private?",
      answer:
        "My Hear Space uses advanced algorithms to curate playlists and recommendations tailored to your preferences,My Hear Space is a platform where you can talk to empathetic listeners about your feelings and challenges, such as anxiety, loneliness, or breakups, in a safe and anonymous environment..",
    },
    {
      question: " What are the charges for using the service?",
      answer:
        "Yes, My Hear Space offers a free tier with basic features and a premium tier for advanced functionalities.",
    },
    {
        question: " Are the listeners professionals?",
        answer:
          "My Hear Space uses advanced algorithms to curate playlists and recommendations tailored to your preferences.",
      },
      {
        question: "How do I become a listener?",
        answer:
          "My Hear Space uses advanced algorithms to curate playlists and recommendations tailored to your preferences.",
      },
      {
        question: "Can I request a specific listener for my session?",
        answer:
          "My Hear Space uses advanced algorithms to curate playlists and recommendations tailored to your preferences.",
      },
  ];

  return (
    <div 
    // className={' bg-[#111111] ${ isLgScreen ? "px-[100px] py-40" :  "py-10 px-6" }'}>
       className={`bg-[#111111] ${
        isLgScreen ? "lg:px-[100px] lg:py-40" : "px-3 py-5"
      }`} >
     <div className={`heading text-left ${
  isLgScreen ? "text-[40px]" : "text-[20px]"
}`}>
        <span className="text-[#d9d9d9]">FAQs</span>

        <span className="text-[#808080]"> - All You Need to Know</span>
      </div>
      <div className="questions py-10">
        {faqs.map((faq, index) => (
          // <div
          //   key={index}
          //   className={'bg-[#1f1f1f] rounded-[24px] mb-4 ${ 
          //     isLgScreen ? "px-12 py-8" :"py-5 px-2" 
          //   }'}
          //    >
          <div
  key={index}
  className={`bg-[#1f1f1f] rounded-[24px] mb-4 ${
    isLgScreen ? "px-12 py-8" : "py-4 px-4"
  }`}
>

<div
  className="que flex justify-between items-center text-[#d9d9d9] cursor-pointer"
  onClick={() => toggleFAQ(index)}
>
<span className={`lg:text-[28px] sm:text-[24px] ${
  isLgScreen ? "w-[1100px]" : "w-[230px]"
}`}>
  {/* Content here */}


  
  {faq.question}</span>
  {openFAQ === index ? (
    <FaMinus className={`${
      isLgScreen ? "w-8 h-8" : "w-4 h-4"
    }`} />
  ) : (
    <FaPlus className={`${
      isLgScreen ? "w-8 h-8" : "w-4 h-4"
    }`} />
  )}
</div>


          {/* Answer Section */}
          {/* <div
              className={`ans ${
                openFAQ === index ? "ans-open" : ""
              } mt-8 lg:text-[24px] md:text-[20px] text-[#d9d9d9]`}
            >
              {faq.answer}
            </div> */}
            <div
  className={`ans ${
    openFAQ === index ? "ans-open" : ""
  }  text-[#d9d9d9] ${
    isLgScreen ? "lg:text-[24px] mt-8" : "md:text-[20px] mt-4"
  }`}
>
  {openFAQ === index ? (
    <span className={`${isLgScreen ? "lg:text-[24px]" : "text-[14px]"}`}>
      {faq.answer}
    </span>
  ) : null}
</div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
