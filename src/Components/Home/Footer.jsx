import React, { useState, useEffect } from 'react';

function Footer() {
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

  // Update the screen size state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='relative'>
      {
        isLgScreen? (      <img className='w-full' src="footer-bg.png" alt="" />
        ) :(
          <img className='w-full' src="sm-footer.png" alt="" />
        )
      }
      <div className={`content absolute top-0 w-full h-full flex flex-col justify-center items-center ${
        isLgScreen ? "lg:gap-16" : "md:gap-8"
      }`}>
        <img className={`object-contain ${isLgScreen ? "lg:w-40" : "w-[120px]"}`} src="Logo.svg" alt="" />
        <div className='flex flex-col justify-between items-center'>
          <span className={`text-[#d9d9d9] font-semibold ${
            isLgScreen ? "text-[40px]" : "text-[25px]"
          }`}>My Hear Space</span>
          <div>
            <span className={`${isLgScreen ? "lg:text-[24px]" : "text-[14px]"} text-[#808080]`}> Your safe place to </span>
            <span className={`${isLgScreen ? "lg:text-[24px]" : "text-[14px]"} text-[#d9d9d9]`}> Share, Heal & Transform</span>
          </div>
        </div>
        {
          isLgScreen && (
            <div className="text-[#d9d9d9] flex 
            lg:gap-8 lg:text-[24px] md:gap-4 md:text-[18px]"
          >
            <span>Home</span>
            <span>Our Listeners</span>
            <span>Blogs</span>
            <span>Become a Listener</span>
          </div>
          )
        }
      
        <div className={`icons flex ${
          isLgScreen ? "gap-10" : "gap-4 mt-8" 
         } `} >
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img className={`${isLgScreen ? "w-12" : "w-8"}`} src="facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img className={`${isLgScreen ? "w-12" : "w-8"}`} src="insta.png" alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img className={`${isLgScreen ? "w-12" : "w-8"}`} src="twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img className={`${isLgScreen ? "w-12" : "w-8"}`} src="wtsp.png" alt="WhatsApp" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img className={`${isLgScreen ? "w-12" : "w-8"}`} src="youtube.png" alt="YouTube" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img className={`${isLgScreen ? "w-12" : "w-8"}`} src="linkdin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
