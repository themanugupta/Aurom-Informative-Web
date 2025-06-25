import { div } from 'motion/react-client'
import React, { useEffect, useState } from 'react'

function BecomeListeners() {
    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
      const handleResize = () => {
        setIsLgScreen(window.innerWidth >= 1024);
      };
  
      handleResize(); // Set initial state
      window.addEventListener('resize', handleResize); // Listen for window resize events
  
      return () => window.removeEventListener('resize', handleResize); // Cleanup on component unmount
    }, []);
      useEffect(() => {
                const handleScrollToTop = () => {
                  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
              };
              handleScrollToTop()
              
            
              }, [])
  
  return (
    <div>
      {isLgScreen ? (
        <div className="up text-[#ffffff] flex px-[100px] justify-center items-center gap-10 py-20">
          <div className="left w-[55%]">
            <div className="h text-[60px] font-semibold">
              <span className="text-[#808080]">"Make a Difference by</span>{" "}
              <span>Listening"</span>
            </div>

            <div className="text-[24px] text-[#d9d9d9] py-10 ">
              Become a listener and help people share their feelings while
              creating a positive impact.
            </div>
            <div className="btn text-[24px]  w-fit text-center bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
              <div
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLScnS73A8zJHMz_GjedYQcvtxdTtJzfHgO4IEgZijmy5fqvBlA/viewform?usp=dialog",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="bg-[#111111] hover:bg-[#d9d9d9] px-10 py-3  rounded-full"
                style={{ backgroundClip: "padding-box" }}
              >
                Become a Listener{" "}
              </div>
            </div>
          </div>
          <div className="right w-[45%]">
            <img src="BecomeListener-img.svg" alt="" />
          </div>
        </div>
      ) : (
        <div className="up text-[#ffffff] flex px-[px] justify-center items-center py-20">
          <div className="left flex flex-col justify-center items-center ">
            <div className="h text-[27px] flex flex-col justify-center items-center self-center text-center font-semibold">
              <div className="text-[#808080] text-center">
                "Make a Difference by
              </div>{" "}
              <div>Listening"</div>
            </div>

            <div className="text-[18px] text-center text-[#d9d9d9] py-10 ">
              Become a listener and help people share their feelings while
              creating a positive impact.
            </div>
            <div className="btn text-[18px] items-center  w-fit text-center bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9] hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
              <div
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLScnS73A8zJHMz_GjedYQcvtxdTtJzfHgO4IEgZijmy5fqvBlA/viewform?usp=dialog",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="bg-[#111111] hover:bg-[#d9d9d9] px-5 py-3  rounded-full"
                style={{ backgroundClip: "padding-box" }}
              >
                Become a Listener{" "}
              </div>
            </div>
          </div>
          {/* <div className="right w-[45%]">
        <img src="BecomeListener-img.svg" alt="" />
      </div> */}
        </div>
      )}

      <div
        className={`down text-white ${
          isLgScreen ? "text-[40px] pt-20" : "text-[22px] pt-10"
        } font-semibold`}
      >
        <div className="heading flex flex-col justify-center items-center  pb-10">
          <span className="text-[#808080]">Guidelines for becoming an</span>
          <span>Perfect Listener</span>
        </div>
        <div
          className={`boxes ${
            isLgScreen ? "flex" : "flex flex-col items-center"
          } flex-wrap mb-20 justify-center  gap-[24px]`}
        >
          {[
            {
              id: "01",
              title: "Complete Verification",
              desc: "Fill out the form and submit your application for approval",
            },
            {
              id: "02",
              title: "Profile Setup",
              desc: "Set up your profile with a picture and a short bio",
            },
            {
              id: "03",
              title: "Training Session",
              desc: "Attend a training session to learn the basics",
            },
            {
              id: "04",
              title: "Start Listening",
              desc: "Begin accepting requests and providing support",
            },
          ].map((step, index) => (
            <div
              key={index}
              className={`box text-white rounded-[16px]  ${
                isLgScreen ? "w-[35%] p-[40px]" : "w-[95%] px-[10px] py-[20px]"
              } bg-[#1f1f1f]`}
            >
              <div
                className={`index rounded-[6px] text-[24px] px-2 py-1 w-fit ${
                  isLgScreen ? "border-[1px]" : " text-[#464646]"
                } border-white`}
              >
                <span>{step.id}</span>
              </div>
              <div
                className={`head ${
                  isLgScreen ? "text-[32px]" : "text-[24px]"
                } py-[24px] font-semibold`}
              >
                {step.title}
              </div>
              <div
                className={`desc ${isLgScreen ? "text-[20px]" : "text-[16px]"}`}
              >
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BecomeListeners