import React from 'react';
import { motion } from 'framer-motion'; // Assuming you're using framer-motion

function Sharereview() {
  const isLgScreen = window.innerWidth >= 1024; // Check if the screen size is large

  return (
    isLgScreen && (
      <motion.div        
        transition={{
          duration: 2, // Specify the duration of the animation
        }}
        initial={{
          opacity: 0, // Starting opacity
        }}
        whileInView={{
          opacity: 1, // Full visibility
        }}
        viewport={{
          once: true, // Trigger animation only once
          amount: 0.5, // Specifies the amount of the element that must be in view
        }}
        className='bg-[#111111] py-32 lg:px-[100px] md:px-8 flex flex-col justify-center items-center'
      >
        <div className="lg:text-[60px] md:text-[40px] flex justify-center items-center gap-4 font-semibold">
          <span className="text-[#808080]">Share Your</span>
          <span className="text-[#d9d9d9]">Reviews</span>
        </div>
        <div className="below my-[80px] rounded-[24px] w-full lg:h-[800px] overflow-hidden border-[1px] border-[#464646] flex justify-between items-center">
          <div className="left bg-[#111111] md:py-8 flex flex-col gap-11 w-[60%] lg:px-10 md:px-6">
            <div>
              <span className='lg:text-[24px] md:text-[16px] text-[#d9d9d9] font-medium'>How do you rate it?</span>
              <img className="lg:w-60 md:w-40 mt-2" src="Stars.png" alt="Stars" />
            </div>
            <div>
              <span className='lg:text-[24px] md:text-[18px] text-[#d9d9d9] font-medium'>Your experience in one word</span>
              <div className='flex justify-start items-center lg:text-[20px] md:text-[14px] gap-4 mt-4'>
                <label className='flex justify-between items-center gap-2 text-[#d9d9d9]'>
                  <input defaultChecked type="radio" name="experience" value="Great!" className='mt-1 accent-[#d9d9d9]' />
                  Great!
                </label>
                <label className='flex justify-center items-center gap-2 text-[#d9d9d9]'>
                  <input type="radio" name="experience" value="Was Ok" className='accent-[#d9d9d9] mt-1' />
                  Was Ok
                </label>
                <label className='flex justify-center items-center gap-2 text-[#d9d9d9]'>
                  <input type="radio" name="experience" value="Bad" className='mt-1 accent-[#d9d9d9]' />
                  Bad
                </label>
              </div>
            </div>
            <div>
              <div className='flex py-3 justify-between w-full items-center'>
                <span className='lg:text-[24px] text-[#d9d9d9] font-medium'>Feedback</span>
                <span className='lg:text-[20px] font-normal text-[#808080]'>Optional</span>
              </div>
              <div className='rounded-[24px] bg-[#1f1f1f] lg:h-56 md:h-36 px-3 py-2 text-[#d9d9d9]'>
                ggg
              </div>
            </div>
            <div>
              <div className="btn w-fit lg:text-[28px] md:text-[16px] bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
                <div className="bg-[#111111] hover:bg-[#d9d9d9] lg:px-10 md:px-4 lg:py-3 md:py-2 rounded-full" style={{ backgroundClip: 'padding-box' }}>
                  Share Reviews
                </div>
              </div>
            </div>
          </div>

          <div className="right lg:h-[798px] w-[40%] flex justify-center items-center lg:bg-[#1f1f1f]">
            <img src="Reviewimage.png" alt="Review" />
          </div>
        </div>
      </motion.div>
    )
  );
}

export default Sharereview;
