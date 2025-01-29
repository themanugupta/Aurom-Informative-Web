// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "framer-motion";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false, // Adjust according to your design
//   autoplay: true, // Optional: Enables automatic sliding
//   autoplaySpeed: 3000, // Optional: Slide interval for autoplay
// };

// const CarouselComponent = ({ listeners, currentIndex }) => {
//   return (
//     <Slider {...settings}>
//       {listeners.map((listener, index) => (
        
//         <div key={index} className="card relaive priyanka bg-red-500 z-50">
//           <img src="sm-ourlistener-bg.svg" alt="Card Frame" className="w-[90%] mx-auto h-[100%] object-cover" />
//           <div>
//             <img src={listener.profile} alt="Feel Image" className="absolute top-[6%] left-[50%] transform -translate-x-1/2 w-[40%] h-auto" />
//             <div className="absolute top-[34%] left-[50%] transform -translate-x-1/2 text-[12px] font-normal bg-[#464646] text-[#d9d9d9] px-4 py-1 rounded-[40px]">
//               F - {listener.age} yrs
//             </div>
//           </div>
//           <h3 className="absolute w-[75%] bottom-[40%] px-3 left-[50%] transform -translate-x-1/2 text-[#d9d9d9] text-[24px] text-center font-semibold">{listener.name}</h3>
//           <span className="absolute w-[85%] bottom-[23%] left-[50%] transform -translate-x-1/2 font-normal text-[#808080] text-center text-[14px]">{listener.description}</span>
//           <div className="absolute bottom-[8%] left-[50%] transform -translate-x-1/2 text-[#111111] text-[12px] bg-[#d9d9d9] hover:bg-[#d9d9d9] hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
//             <button className="px-4 py-[6px] rounded-full" style={{ backgroundClip: 'padding-box' }}>Connect Now</button>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// // export default CarouselComponent;



// function Caringlisteners() {
//   const navigate = useNavigate();
//   const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const listeners = [
//     { bgimage: "caringlistenerframe.svg", profile:"profile.png", name: "Mohit", age: 26, description: "I started dating a guy when I was young, it went on for 4 long years. Since the beginning of the relationship... Read More" },
//     { bgimage: "caringlistenerframe.svg", profile: "profile-2-img.png", name: " Simran", age: 30, description: "Another started dating a guy when I was young, it went on for 4 long years. Since story here... Read More" },
//     { bgimage: "caringlistenerframe.svg",  profile: "profile-3-img.png",  name: " Anushka", age: 30, description: "Another story here.. started dating a guy when I was young, it went on for 4 long years. Since. Read More" }
//     // Add more listener objects as needed
//   ];

//   useEffect(() => {
//     const handleResize = () => setIsLgScreen(window.innerWidth >= 1024);
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     if (!isLgScreen) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % listeners.length);
//       }, 3000); // Change listener every 3 seconds

//       return () => clearInterval(interval);
//     }
//   }, [isLgScreen, listeners.length]);

//   const handleViewOurListeners = () => {
//     navigate("/OurListeners");
//   };

//   const renderCards = () => {
//     if (isLgScreen) {
//       return listeners.map((listener, index) => (
//           <motion.div
//                   key={index}
//                   transition={{ duration: 1.3}}
//                   initial={{ x: index === 0 ? 100 : -100 }}
//                   whileInView={{ x: 0 }}
//                   viewport={{ once: true, amount: 0.2 }}
//                   className="card relative"
//                 >
//                    {/* key={index} className="card relative"> */}
//           <img src={listener.bgimage} alt="Card Frame" className="w-full h-full object-cover" />
//           <div>
//             <img src={listener.profile} alt="Feel Image" className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[50%] h-auto" />
//             <div className="absolute top-[34%] left-1/2 transform -translate-x-1/2 lg:text-[18px] md:text-[12px] font-normal bg-[#464646] text-[#d9d9d9] lg:px-7 md:px-4 lg:py-2 md:py-1 rounded-[40px]">
//               F - {listener.age} yrs
//             </div>
//           </div>
//           <h3 className="absolute w-[75%] bottom-[39%] left-1/2 transform -translate-x-1/2 text-[#d9d9d9] lg:text-[32px] md:text-[18px] text-center font-semibold">{listener.name}</h3>
//           <span className="absolute w-[89%] bottom-[18%] left-1/2 transform -translate-x-1/2 font-normal text-[#808080] text-center lg:text-[20px] md:text-[12px]">{listener.description}</span>
//           <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 text-[#111111] lg:text-[18px] md:text-[12px] bg-[#d9d9d9] hover:bg-[#d9d9d9] hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
//             <button className="lg:px-6 md:px-2 lg:py-3 md:py-1 rounded-full" style={{ backgroundClip: 'padding-box' }}>Connect Now</button>
//           </div>
//         </motion.div>
//       ));
//     } else {
//       const currentListener = listeners[currentIndex];
//       return (
//         <CarouselComponent listeners={listeners} currentIndex={currentListener}/>
//         // <motion.div 
//         // key={currentIndex} 
//         // className="card relative" 
//         // // initial={{ opacity: 0 }} 
//         // // animate={{ opacity: 1 }} 
//         // // exit={{ opacity: 0 }}
//         // transition={{ duration: 0.6 }}
//         // initial={{ x: "7px" }} // Start off-screen to the right
//         // animate={{ x: "0%" }} // Slide to the center
//         // exit={{ x: "-7px" }} // Slide off-screen to the left
//         // >
//         //   <img src="sm-ourlistener-bg.svg" alt="Card Frame" className="w-[90%] mx-auto h-[100%] object-cover" />
//         //   <div>
//         //     <img src={currentListener.profile}alt="Feel Image" className="absolute top-[6%] left-[50%] transform -translate-x-1/2 w-[40%] h-auto" />
//         //     <div className="absolute top-[34%] left-[50%] transform -translate-x-1/2 text-[12px] font-normal bg-[#464646] text-[#d9d9d9] px-4 py-1 rounded-[40px]">
//         //       F - {currentListener.age} yrs
//         //     </div>
//         //   </div>
//         //   <h3 className="absolute w-[75%] bottom-[40%] px-3 left-[50%] transform -translate-x-1/2 text-[#d9d9d9] text-[24px] text-center font-semibold">{currentListener.name}</h3>
//         //   <span className="absolute w-[85%] bottom-[23%] left-[50%] transform -translate-x-1/2 font-normal text-[#808080] text-center text-[14px]">{currentListener.description}</span>
//         //   <div className="absolute bottom-[8%] left-[50%] transform -translate-x-1/2 text-[#111111] text-[12px] bg-[#d9d9d9] hover:bg-[#d9d9d9] hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
//         //     <button className="px-4 py-[6px] rounded-full" style={{ backgroundClip: 'padding-box' }}>Connect Now</button>
//         //   </div>
//         // </motion.div>
//       );
//     }
//   };

//   return (
//     <div className={`bg-[#111111] ${isLgScreen ? "py-40" : "py-20"} flex flex-col items-center`}>
//       <div className={`${isLgScreen ? "text-[60px] gap-4 flex" : "text-[26px] gap-2 flex flex-col"}   justify-center items-center font-semibold`}>
//         <span className="text-[#808080]">Meet Our Caring </span>
//         <span className="text-[#d9d9d9]">Listeners</span>
//       </div>
//       <div className="cards   py-[80px]">
//         {renderCards()}
//       </div>
     
//       <div onClick={handleViewOurListeners} className="btn  bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
//         <div className={`bg-[#111111] hover:bg-[#d9d9d9]  ${ 
//           isLgScreen ? "px-10 py-3 text-[28px]"
//  : "px-5 py-1 text-[18px]"          }   rounded-full`}>
//           View all
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Caringlisteners;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const CarouselComponent = ({ listeners,
  settings,handleviewDescription
}) => (
  <Slider {...settings}>
    {listeners.map((listener, index) => (
      <div key={index} className="card relative  z-50">
        <img src="sm-ourlistener-bg.svg" alt="Card Frame" className="w-[90%] mx-auto h-[100%] object-cover" />
        <div>
          <img src={listener.profile} alt="Feel Image" className="absolute top-[6%] left-[50%] transform -translate-x-1/2 w-[40%] h-auto" />
          <div className="absolute top-[34%] left-[50%] transform -translate-x-1/2 text-[12px] font-normal bg-[#464646] text-[#d9d9d9] px-4 py-1 rounded-[40px]">
            F - {listener.age} yrs
          </div>
        </div>
        <h3 className="absolute w-[75%] bottom-[40%] left-[50%] transform -translate-x-1/2 text-[#d9d9d9] text-[24px] text-center font-semibold">{listener.name}</h3>
        <span className="absolute w-[85%] bottom-[23%] left-[50%] transform -translate-x-1/2 font-normal text-[#808080] text-center text-[14px]">{listener.description}</span>
        <div onClick={
          ()=>{                   handleviewDescription({data:listener})
        }
        } className="absolute bottom-[8%] left-[50%] transform -translate-x-1/2 text-[#111111] text-[12px] bg-[#d9d9d9] hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
          <button className="px-4 py-[6px] rounded-full" style={{ backgroundClip: 'padding-box' }}>Connect Now</button>
        </div>
      </div>
    ))}
  </Slider>
);

function Caringlisteners() {
  const navigate = useNavigate();
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Keep this if arrows are not needed
    autoplay: true,
    autoplaySpeed: 3000,
    // appendDots: dots => (
    //   <div
    //     style={{
    //       backgroundColor: "red",
    //       borderRadius: "10px",
    //       padding: "10px"
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    customPaging: function(i) {
      return (
        <div className={`flex justify-center items-center 
          `}>
         <div
                
                  className={` h-3
                    
                    w-3
                    rounded-full      ${
                     currentIndex === i ? "bg-white w-9" : "bg-gray-500"
                 }
                   
                  `}
                
              ></div>
      </div>
      
    )}
  };

  const listeners = [
    { profile: "profile.png", name: "Mohit", age: 26, description: "I started dating a guy when I was young, it went on for 4 long years. Since the beginning of the relationship... Read More" },
    { profile: "profile-2-img.png", name: "Simran", age: 30, description: "I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope ... read more" },
    { profile: "profile-3-img.png", name: "Anushka", age: 30, description: "I have served the nation in the Indian Navy for 35 years. It has provided me with a humongous and kaleidoscope ... read more" }
  ];

  useEffect(() => {
    const handleResize = () => setIsLgScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isLgScreen) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % listeners.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isLgScreen, listeners.length]);

  const handleViewOurListeners = () => navigate("/OurListeners");
  const handleviewDescription = ({data}) =>{
    console.log("call hua",data )
    navigate("/Ourlistener", { state: data });
  }
  ;

  return (
    <div className={`bg-[#111111] ${isLgScreen ? "py-40 flex  " :  "py-20 "} flex-col justify-center items-center`}>
      <div className={`${isLgScreen ? "text-[60px] gap-4 flex" : "text-[26px] gap-2 flex flex-col"} justify-center items-center font-semibold`}>
        <span className="text-[#808080]">Meet Our Caring</span>
        <span className="text-[#d9d9d9]">Listeners</span>
      </div>
      <div className={`cards ${isLgScreen ? "flex gap-[24px] py-[80px]" : "py-[50px] " }  `}>
        {isLgScreen ? (
          listeners.map((listener, index) => (
            <motion.div
              key={index}
              transition={{ duration: 1.3 }}
              initial={{ x: index === 0 ? 100 : -100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="card relative"
            >
              <img src="caringlistenerframe.svg" alt="Card Frame" className="w-full h-full object-cover" />
              <div>
                <img src={listener.profile} alt="Feel Image" className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[50%] h-auto" />
                <div className="absolute top-[34%] left-1/2 transform -translate-x-1/2 lg:text-[18px] font-normal bg-[#464646] text-[#d9d9d9] lg:px-7 lg:py-2 rounded-[40px]">
                  F - {listener.age} yrs
                </div>
              </div>
              <h3 className="absolute w-[75%] bottom-[39%] left-1/2 transform -translate-x-1/2 text-[#d9d9d9] lg:text-[32px] text-center font-semibold">{listener.name}</h3>
              <span className="absolute w-[89%] bottom-[18%] left-1/2 transform -translate-x-1/2 font-normal text-[#808080] text-center lg:text-[20px]">{listener.description}</span>
              <div onClick={
                ()=>{
                  handleviewDescription({data:listener})
                }
              } className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 text-[#111111] lg:text-[18px] bg-[#d9d9d9] hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
                <button className="lg:px-6 lg:py-3 rounded-full" style={{ backgroundClip: 'padding-box' }}>Connect Now</button>
              </div>
            </motion.div>
          ))
        ) : (
          <CarouselComponent listeners={listeners}
          settings={settings} handleviewDescription={handleviewDescription}
          />
        )}
      </div>
      {/* <div onClick={handleViewOurListeners} className="btn w-fit item-center justify-center bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
        <div className={`${isLgScreen ? "px-10 py-3 text-[28px]" : "px-5 py-1 text-[18px]"} rounded-full`}>
          View all
        </div>
      </div>  */}
      <div className="btn  ">
         <div onClick={handleViewOurListeners} className={`btn  text-center ${isLgScreen? "" : "ml-[130px]" } w-fit relative   bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]`}>
        <div className={`bg-[#111111] hover:bg-[#d9d9d9]  ${ 
          isLgScreen ? "px-10 py-3 text-[28px]"
 : "px-5 py-1 text-[18px] "          }   rounded-full`}>
          View all
        </div>
        </div>
      </div>
    </div>
  );
}

export default Caringlisteners;

