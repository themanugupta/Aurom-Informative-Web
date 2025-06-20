import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import "../Faq/FAQ.css";

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
      question: " What is Aurom?",
      answer:
        "Aurom is a platform where you can talk to trained human listeners anytime — no judgment, no advice, just someone who truly hears you.",
    },
    {
      question: " Who are the listeners?",
      answer:
        "Our listeners are verified real people trained in active listening techniques. They’re selected and monitored for empathy, professionalism, and respect for user privacy.",
    },
    {
      question: " Is it really anonymous?",
      answer:
        "Yes. You don’t need to share your name, identity, or personal details to use Aurom. Just enter login otp and start",
    },
    {
      question: " Are the listeners professionals?",
      answer:
        "Aurom uses advanced algorithms to curate playlists and recommendations tailored to your preferences.",
    },
    {
      question: " Can I talk about anything?",
      answer:
        "Yes — you can speak freely about anything on your mind: stress, loneliness, heartbreak, family pressure, work burnout, or just a rough day. Nothing is too small. Just be respectfull to listeners.",
    },
    {
      question: "When can I call?",
      answer:
        "You can use Aurom anytime — day or night. Especially when you need someone to talk to but can’t reach friends or family.",
    },
    {
      question: "How long can I talk?",
      answer:
        "As long as you want but most most calls last between 10 to 30 minutes.",
    },
    {
      question: "Is it free?",
      answer:
        "We offer only paid calls as we need to fairly treat our listeners. Some discounts may be available",
    },
    {
      question: "What kind of support is not allowed?",
      answer:
        "Auron is not equipped for medical emergencies or crisis situations involving self-harm or harm to others. In such cases, we recommend contacting professional emergency services or a licensed therapist.",
    },
  ];

  return (
    <div
      // className={' bg-[#111111] ${ isLgScreen ? "px-[100px] py-40" :  "py-10 px-6" }'}>
      className={`bg-[#111111] ${
        isLgScreen ? "lg:px-[100px] lg:py-40" : "px-3 py-5"
      }`}
    >
      <div
        className={`heading text-left ${
          isLgScreen ? "text-[40px]" : "text-[20px]"
        }`}
      >
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
              <span
                className={`lg:text-[28px] sm:text-[24px] ${
                  isLgScreen ? "w-[1100px]" : "w-[230px]"
                }`}
              >
                {/* Content here */}

                {faq.question}
              </span>
              {openFAQ === index ? (
                <FaMinus className={`${isLgScreen ? "w-8 h-8" : "w-4 h-4"}`} />
              ) : (
                <FaPlus className={`${isLgScreen ? "w-8 h-8" : "w-4 h-4"}`} />
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
                <span
                  className={`${isLgScreen ? "lg:text-[24px]" : "text-[14px]"}`}
                >
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
