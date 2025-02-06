import React, { useState, useEffect } from 'react';
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const blogData = [
  {
    title: "3 Main Problems In A Long Distance Relationship",
    description: "I scanned my room from left to right - all remnants of our relationship - the teddy he gifted me on ....",
    category: "Breakup",
    image: "supportiveblog.png",
  },
  {
    title: "The Feeling Of Having No One Special",
    description: "Reel after reel. Youtube shorts. Reaction video. ASMR. Podcast. Silly podcast.... read more",
    category: "Motivation",
    image: "blog-2-img.png",
  },
  {
    title: "How To Become An Extrovert From An Introvert ",
    description: "BI am two years into a long distance relationship with my boyfriend and it started with . ... read more.",
    category: "Self-Improvement",
    image: "blog-3-img.png",
  },
];

function Oursupprtiveblogs() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const updateScreenSize = () => setIsLgScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', updateScreenSize);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogData.length);
    }, 3000);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
      clearInterval(interval);
    };
  }, []);

  const handleViewAllBlogs = () => {
    navigate("/OurBlogs");
  };

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className={`${
        isLgScreen ? "pb-28 pt-20" : "py-10 pb-20" }  flex flex-col justify-center items-center bg-[#111111]`} >
      <div className={` ${
        isLgScreen ? "text-[60px]" : "text-[27px]" } flex justify-center items-center gap-4 font-semibold`}>
        <span className="text-[#808080]">Our</span>
        <span className="text-[#d9d9d9]">Supportive Blogs</span>
      </div>
      {isLgScreen ? (
        <div className="below flex justify-center items-center py-[80px] gap-[24px]">
          {blogData.map((blog, index) => (
            <div  key={index} className="card rounded-[24px] w-[25%] lg:h-[637px] md:h-[480px] border-[1px] overflow-hidden border-[#464646]">
              <img className='h-[300px] w-full object-cover' src={blog.image} alt="" />
              <div className="bootm text-[#d9d9d9] lg:px-[24px] md:px-4 py-[40px]">
                <h2 className='lg:text-[22px] md:text-[18px] pb-[16px] font-bold'>{blog.title}</h2>
                <span className='lg:text-[18px] md:text-[12px]'>{blog.description}</span>
                <div className='pt-[40px] a bottom-4 flex w-[100%] justify-between items-center'>
                  <span className='lg:text-[20px] w-[80%] line-clamp-3 md:text-[16px]'>{blog.category}</span>
                  <div className="btn lg:text-[28px] md:text-[12px] bg-white text-[#111111] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full">
                    <Link to="/Blogsdesc" className="bg-white lg:p-2 md:p-1 rounded-full">
                      <GoArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="below flex justify-center items-center py-[30px] gap-[24px]">
          <div className="card-container bg-[#1f1f1f] mx-6 rounded-xl h-[550px] w-full flex overflow-hidden">
            {blogData.map((blog, index) => (
              <div key={index} className={`card rounded-[24px] w-full transition-transform transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                <img src={blog.image} alt="" className="w-full" />
                <div className="bootm px-3 text-[#d9d9d9] py-[30px]">
                  <h2 className='text-[19px] pb-[16px] font-bold'>{blog.title}</h2>
                  <span className='text-[15px]'>{blog.description}</span>
                  <div className='pt-[40px] absolute w-[90%] bottom-9 flex justify-between items-center'>
                    <span className='lg:text-[20px] w-[70%] md:text-[16px]'>{blog.category}</span>
                    <div className="btn lg:text-[28px]  md:text-[12px] bg-white text-[#111111] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full">
                      <div className="bg-white p-1 rounded-full">
                        <GoArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div onClick={handleViewAllBlogs} className="btn  bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
        <div className={`bg-[#111111] hover:bg-[#d9d9d9]  ${ 
          isLgScreen ? "px-10 py-3 text-[28px]"
 : "px-5 py-1 text-[18px]"          }   rounded-full`}>
          View all
        </div>
      </div>
    </motion.div>
  );
}

export default Oursupprtiveblogs;
