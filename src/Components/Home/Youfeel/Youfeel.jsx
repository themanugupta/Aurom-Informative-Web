



import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"; // Ensure you have this library installed
import "./Youfeel.css";
import Slider from "react-slick";


function Youfeel() {
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "43% of Indian’s are Facing Loneliness!",
      img: "feel-1-img.svg",
    },
    {
      text: "46.45% of Indian’s are Facing Breakups",
      img: "feel-2-img.svg",
    },
    {
      text: "68% of Indian’s are Facing Relationship issues",
      img: "feel-3-img.svg",
    },
    // Add more testimonials if needed
  ];

  useEffect(() => {
    const handleResize = () => setIsLgScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isLgScreen) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 3000); // Change testimonial every 3 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [isLgScreen, testimonials.length]);


 



  const renderCards = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false, // Keep this if arrows are not needed
      autoplay: true,
      autoplaySpeed: 3000,
  
      customPaging: function (i) {
        return (
          <div className={`flex justify-center items-center 
            `}>
            <div className={` h-3 w-3 rounded-full      ${currentIndex === i ? "bg-white w-9" : "bg-gray-500"
                } `}
  
            ></div>
          </div>
  
        )
      }
    };
    if (isLgScreen) {
      // Render all cards for large screens
      return testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          transition={{ duration: 1.3 }}
          initial={{ x: index === 0 ? 100 : -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="card relative"
        >
          <img src="Cardframe.png" alt="Card Frame" className="w-full h-full object-cover" />
          <div>
            <img
              src={testimonial.img}
              alt="Feel Image"
              className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[80%] h-auto"
            />
          </div>
          <h3 className="absolute w-[80%] top-[72%] left-1/2 transform -translate-x-1/2 text-[#d9d9d9] lg:text-[28px] md:text-[18px] text-center font-semibold">
            {testimonial.text}
          </h3>
        </motion.div>
      ));
    } else {
      // Render a single card for small screens with transition
      const currentTestimonial = testimonials[currentIndex];
      return (
        <Slider {...settings}>
          {testimonials.map((testimonial, i) => (
            <div key={i} className='relative z-50'>
              <img src="sm-youfeel.png" alt="Card Frame" className="w-[80%] self-center mx-auto h-[100%] object-cover" />
              <div>
                <img
                  src={testimonial.img}
                  alt="Feel Image"
                  className="absolute top-[6%] left-[50%] transform -translate-x-1/2 w-[50%] h-auto"
                />
              </div>
              <h3 className="absolute w-[75%] bottom-[7%] px-3 left-[50%] transform -translate-x-1/2 text-[#d9d9d9] text-[18px] text-center font-semibold">
                {testimonial.text}
              </h3>
            </div>
          ))}


        </Slider>
      );
    }
  };

  return (
    <div className={`bg-[#111111] ${isLgScreen ? " py-40" : "py-20"}
    } `}>
      {/* Heading Section */}
      <div className={` ${isLgScreen ? "text-[60px] pb-[80px]" : "text-[26px] pb-10"}  flex  flex-col justify-between items-center font-semibold`}>
        <span className="text-[#808080]">Do you feel you are the</span>
        <span className="text-[#d9d9d9]">Only One?</span>
      </div>

      {/* Card Section */}
      <div className={`cards ${isLgScreen ? "flex" :"" }  justify-center gap-[24px]`}>
        {renderCards()}
      </div>
    </div>
  );
}

export default Youfeel;





