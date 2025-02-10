import React, { useEffect, useState } from 'react';
import './SafeSpace.css'; // Custom CSS file
import { motion, AnimatePresence } from 'framer-motion';


function SafeSpace() {
  const [currentWord, setCurrentWord] = useState('Transform');
  const [animating, setAnimating] = useState(false);
  const words = ['Heal......', 'Transform', 'Share......'];
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);


  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true); // Trigger animation
      setTimeout(() => {
        setCurrentWord((prevWord) => {
          const currentIndex = words.indexOf(prevWord);
          const nextIndex = (currentIndex + 1) % words.length;
          return words[nextIndex];
        });
        setAnimating(false); // End animation
      }, 500); // Match animation duration
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-[#111111] relative flex justify-center items-center'>
      {
        isLgScreen ? (<>
          <img className='w-full h-full object-cover' src='BGimage.png' alt='' />
      <div className='text absolute lg:gap-12 sm:gap-8 lg:top-28 sm:top-10 flex flex-col justify-center items-center'>
        <div className='lg:text-[68px] md:text-[35px] text-[#d9d9d9]   flex w-[100%] font-semibold overflow-hidden'>
          <div className='w-[65%] mr-1 text-[#808080]'>
            Your Safe Space to
          </div>
          <AnimatePresence mode="wait">
              <motion.div
                key={currentWord}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {currentWord}
              </motion.div>
            </AnimatePresence>
        </div>
        <div className='lg:text-[24px] md:text-[12px] mx-auto  text-center w-[70%]'>
          <span className='text-[#808080]'>
            Share anything with us and get support through 
          </span>
          <span className='text-[#d9d9d9]'> call, chat, or video call</span>
          <span className='text-[#808080]'>, anytime you need.</span>
      
     
      </div>
      <div className="btn lg:text-[28px] md:text-[14px] w-fit text-center bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
        <div
          className="bg-[#111111] hover:bg-[#d9d9d9] px-10 py-3  rounded-full"
          style={{ backgroundClip: 'padding-box' }}
        >
          Connect Now
        </div>
      </div>
      </div>
        </>) : ( <>
          <img className='w-full h-full mt-20 object-cover' src='sm-safe-space.svg' alt='' />
      <div className='text absolute top-12   flex flex-col justify-center items-center'>
        <div className='text-[33px] text-[#d9d9d9]   flex flex-col w-[100%] font-semibold overflow-hidden'>
          <div className=' text-center  text-[#808080]'>
            Your Safe Space to
          </div>
          <AnimatePresence mode="wait">
              <motion.div
                key={currentWord}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-center"
              >
                {currentWord}
              </motion.div>
            </AnimatePresence>
        </div>
        <div className='text-[18px] mx-auto  text-center px-3 py-7'>
          <span className='text-[#808080]'>
            Share anything with us and get support through 
          </span>
          <span className='text-[#d9d9d9]'> call, chat, or video call</span>
          <span className='text-[#808080]'>, anytime you need.</span>
      
     
      </div>
      <div className="btn text-[16px] w-fit mt-5 text-center bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
        <div
          className="bg-[#111111] hover:bg-[#d9d9d9] px-5  py-[7px] rounded-full"
          style={{ backgroundClip: 'padding-box' }}
        >
          Connect Now
        </div>
      </div>
      </div></>)
      }
    
    </div>
  );
}

export default SafeSpace;
