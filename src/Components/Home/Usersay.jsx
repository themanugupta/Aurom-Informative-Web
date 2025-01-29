


// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// function Usersay() {
//   const isLgScreen = window.innerWidth >= 1024;
//   const testimonials = [
    

//     "I’v never experienced such a safe and comforting environment to share my thoughts. The listeners are incredibly kind and understanding. It feels like talking to a friend who truly cares about how you feel.",
//     "This platform has been a lifesaver. The support I've received from the listeners has helped me through some tough times. It's a truly remarkable service.",
//     "The listeners are amazing! It's comforting to know there's always someone to talk to who listens without judgment. I highly recommend it to anyone needing a safe space to express themselves."
//   ];
  
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (!isLgScreen) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//       }, 3000); // Change testimonial every 3 seconds

//       return () => clearInterval(interval); // Cleanup interval on component unmount
//     }
//   }, [isLgScreen, testimonials.length]);

//   return (
//     <motion.div
//       transition={{ duration: 2 }}
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true, amount: 0.5 }}
//       className={` ${
//         isLgScreen ? "py-40 " : " py-10" }  flex flex-col justify-between items-center bg-[#1f1f1f]`}
//     >
//       <div className={` ${
//         isLgScreen ? "text-[60px] pb-[80px] gap-4 " : "text-[27px] pb-[40px] gap-2 " }   flex justify-center items-center font-semibold`}>
//         <span className="text-[#808080]">What Our </span>
//         <span className="text-[#d9d9d9]">User Say</span>
//       </div>
//       <div className={`bottom flex  items-center justify-center gap-[24px] ${isLgScreen ? 'flex-row' : 'flex-col'}`}>
//         {isLgScreen ? (
//           testimonials.map((testimonial, index) => (
//             <div key={index} className="flex flex-col justify-center py-16 gap-7 rounded-[24px] items-center w-[27%] bg-[#464646]">
//               <img src="Stars.png" alt="" />
//               <span className="lg:text-[20px] h-[190px] md:text-[15px] w-[90%] text-[#d9d9d9] font-normal text-left">
//                 {testimonial}
//               </span>
//             </div>
//           ))
//         ) : (
//           <div className="flex flex-col justify-center py-12 gap-7 rounded-[24px] items-center w-[90%] bg-[#464646]">
//             <img src="Stars.png" alt="" />
//             <span className="lg:text-[20px] h-[150px] md:text-[15px] w-[90%] text-[#d9d9d9] font-normal text-left">
//               {testimonials[currentIndex]}
//             </span>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// export default Usersay;




import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Usersay() {
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
  const testimonials = [
    "I've never experienced such a safe and comforting environment to share my thoughts. The listeners are incredibly kind and understanding. It feels like talking to a friend who truly cares about how you feel.",
    "This platform has been a lifesaver. The support I've received from the listeners has helped me through some tough times. It's a truly remarkable service.",
    "The listeners are amazing! It's comforting to know there's always someone to talk to who listens without judgment. I highly recommend it to anyone needing a safe space to express themselves."
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className={`${
        isLgScreen ? "py-40 " : "py-10"
      } flex flex-col justify-between items-center bg-[#1f1f1f]`}
    >
      <div className={`${
        isLgScreen ? "text-[60px] pb-[80px] gap-4 " : "text-[27px] pb-[40px] gap-2 "
      } flex justify-center items-center font-semibold`}>
        <span className="text-[#808080]">What Our </span>
        <span className="text-[#d9d9d9]">User Say</span>
      </div>
      <div className={`bottom flex items-center justify-center gap-[24px] ${
        isLgScreen ? 'flex-row' : 'flex-col'
      }`}>
        {isLgScreen ? (
          testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-center py-16 gap-7 rounded-[24px] items-center w-[27%] bg-[#464646]">
              <img src="Stars.png" alt="Stars" />
              <span className="lg:text-[20px] h-[190px] md:text-[15px] w-[90%] text-[#d9d9d9] font-normal text-left">
                {testimonial}
              </span>
            </div>
          ))
        ) : (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center py-12 gap-7 rounded-[24px] items-center w-[90%] bg-[#464646]"
          >
            <img src="Stars.png" alt="Stars" />
            <span className="lg:text-[20px] h-[150px] md:text-[15px] w-[90%] text-[#d9d9d9] font-normal text-left">
              {testimonials[currentIndex]}
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Usersay;
