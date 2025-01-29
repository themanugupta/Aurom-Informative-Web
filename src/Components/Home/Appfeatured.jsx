



import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { motion } from "motion/react"


function Appfeatured() {
    const [currentIndex, setCurrentIndex] = useState(1);
 const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

  // Update the screen size state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    let data = [
        {
            number: "01",
            title: "Times of India",
            decs: "We’re thrilled to share that My Hear Space has been featured in The Times of India, one of India’s most trusted and renowned publications! This recognition highlights our mission to provide a safe, supportive platform where you can share, heal, and grow.",
            img: "featuredimage.png"
        },
        {
            number: "02",
            title: "Economic Times",
            decs: "My Hear Space was highlighted in Economic Times for its innovative approach to mental health support. Together, we’re breaking barriers and creating impactful change.",
            img: "featuredimage.png"
        },
        {
            number: "03",
            title: "Hindustan Times",
            decs: "Hindustan Times acknowledged My Hear Space as a significant contributor to digital wellness and mental health awareness.",
            img: "featuredimage.png"
        },
        {
            number: "04",
            title: "The Hindu",
            decs: "The Hindu recognized My Hear Space as a platform that fosters healing, empathy, and community.",
            img: "featuredimage.png"
        },
    ];

    

    const handleSlideChange = (index) => {
        if (index==4) { setCurrentIndex(1)
            
        }else{

        console.log("index", index)
        setCurrentIndex(index+1); // Directly set the currentIndex to match the slide index
    }

    };

    console.log("current", currentIndex)
    // useEffect(() => {
    //     handleSlideChange(0); // Ensure the first dot matches the initial slide
    // }, []);

    return (
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
         }} className={` ${
            isLgScreen ? "py-40" : "py-20"}
         lg:px-[100px] md:px-8 bg-[#111111]`}>
            <div className={`${
                isLgScreen ? "text-[60px] gap-4 pb-[80px]" : "text-[27px] gap-2 pb-[30px] "
            }
                   flex justify-center items-center  font-semibold`}>
                <span className="text-[#808080]">Our App is </span>
                <span className="text-[#d9d9d9]">Featured In</span>
            </div>
<div      
   
      >
            <Slide
                easing="ease"
                
                bg="white"
                autoplay={false}
                prevArrow={<div className="arrow-left">←</div>}
                nextArrow={<div className="arrow-right">→</div>}
                onChange={(e)=>{ handleSlideChange(e+1)
                    console.log("e", e)
                }}
                // index={currentIndex}
            >
                {data.map((item, index) => (  
                    <div key={index} className={` ${
                        isLgScreen ? "flex rounded-[40px] h-[570px]" : " flex flex-col rounded-[20px] h-[550px]" } bg-[#1f1f1f] mx-5 overflow-hidden     `}>
                            <div className={`right ${
                                isLgScreen ? "w-[50%]" : "w-full" }
                              } md:w-[50%]   object-cover  `}>
                            <img
                                className={` ${
                                    isLgScreen ? "w-full h-full object-cover" : " w-full h-48 object-cover" }
                                }`}
                                src={item.img}
                                alt={item.title}
                            />
                        </div>
                        <div className={`left  ${
                            isLgScreen ? "flex flex-col w-[60%] px-10" : "flex flex-col w-full px-3" }
                         py-5 overflow-hidden`} >
                             
                            <h1 className={`font-bold   ${isLgScreen ? "text-[80px] " : " text-[26px]"   }   text-[#464646]`}>
                                {item.number}
                            </h1>
                            <h2 className={`font-semibold  text-[#d9d9d9] ${
                                isLgScreen ? "text-[48px] py-7" : "text-[28px] py-3" }
                            }  `}>
                                {item.title}
                            </h2>
                            <p className={`font-normal text-[#d9d9d9] ${
                                isLgScreen ? "text-[24px]" : "text-[16px]" }
                            }  `}>
                                {item.decs}
                            </p>
                        </div>
                        
                      
                    </div>
                ))}
            </Slide>

            </div> 

            {/* Custom Dot Indicators */}
            <div className={`flex justify-center items-center gap-[13px]  ${
                isLgScreen ? "mt-16" : "mt-8" }
                `}>
                {data.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full  transition-all ${
                            currentIndex === index+1 ? "bg-white w-6" : "bg-gray-500"
                        }`}
                    
                    ></div>
                ))}
            </div>
        </motion.div>
    );
}

export default Appfeatured;
