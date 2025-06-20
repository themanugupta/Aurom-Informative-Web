import React from 'react';
import { motion } from "motion/react"


function Firstrecharge() {
  const isLgScreen = window.innerWidth >= 1024; // Check if the screen size is large

  return (
    <>
      {isLgScreen ? (
        <div className="Connect  lg:px-[100px] md:px-8 bg-[#111111] relative flex justify-center py-20">
          <img
            className="w-full object-cover"
            src="firstrechargebg.png"
            alt=""
          />
          <div className="content flex justify-between items-center inset-0 lg:px-[160px] md:px-[80px] gap-16 absolute">
            <motion.div
              transition={{
                duration: 1.1, // Specify the duration of the animation
              }}
              initial={{
                x: -160, // Starting position
              }}
              whileInView={{
                x: 0, // Target position
              }}
              viewport={{
                once: true,
                // Trigger animation only once
                amount: 0.2, // Specifies the amount of the element that must be in view (0.5 means 50%)
              }}
              className="left  gap-20 "
            >
              <span className=" text-[#d9d9d9] lg:text-[60px] md:text-[36px] font-semibold leading-tight">
                Get 50% OFF on your First Recharge
              </span>
              <div className="img flex lg:mt-16 md:mt-10 lg:gap-10 md:gap-5 ">
                <img
                  className=" lg:w-[196px] md:w-[120px] object-fill"
                  src="playstore.svg"
                  alt=""
                />
                <img
                  className=" lg:w-[196px] md:w-[120px]  object-cover"
                  src="appstore.svg"
                  alt="https://apps.apple.com/in/app/aurom-you-matter/id6740231514"
                />
              </div>
            </motion.div>
            <motion.div
              transition={{
                duration: 1.1, // Specify the duration of the animation
              }}
              initial={{
                x: 160, // Starting position
              }}
              whileInView={{
                x: 0, // Target position
              }}
              viewport={{
                once: true,
                // Trigger animation only once
                amount: 0.2, // Specifies the amount of the element that must be in view (0.5 means 50%)
              }}
            >
              <img
                className="pt-[40px] lg:w-[570px] md:w-[350px] bottom-"
                src="firstrechargeimage.svg"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      ) : (
        <div className=" Connect px-[3px] text-[#d9d9d9] relative bg-[#111111] my-12 pt-6 mx-3  rounded-2xl px-auto flex justify-center items-center">
          {/* Background Image */}
          <img
            className="absolute top-0 left-0 self-center rounded-xl  object-cover z-0"
            src="firstrechargebg.png"
            alt="Background"
          />

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col w-full justify-center items-center">
            {/* Left Section */}
            <div className="flex flex-col items-center space-y-4">
              <span className="text-[22px] px-5 font-semibold  text-center leading-tight">
                Get 50% OFF on your First Recharge
              </span>
              <div className="flex space-x-4">
                <img className="w-28" src="playstore.svg" alt="Play Store" />
                <img className="w-28" src="appstore.svg" alt="App Store" />
              </div>
            </div>

            {/* Right Section */}
            <div className="w-[70%] pt-4">
              <img
                className="w-full"
                src="firstrechargeimage.svg"
                alt="Offer"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Firstrecharge;
