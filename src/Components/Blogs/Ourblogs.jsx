import React, { useState } from 'react'
import Oursupprtiveblogs from '../Home/Oursupprtiveblogs'
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
  // const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);






function Ourblogs() {
    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
  
  const navigate=useNavigate();
  const handleViewBlogDesc=()=>{
    navigate("/Blogsdesc")
  }

  const blogData=[{
    title: "5 Things to Do To Forget Your Ex",
      description: "I scanned my room from left to right - all remnants of our relationship - the teddy he gifted me on ....",
      category: "Breakup",
      image: "supportiveblog.png",
  },
  {
    title: "How to Stay Positive During Tough Times",
    description: "Life throws challenges at us, but it's crucial to remain hopeful and optimistic for better days....",
    category: "Motivation",
    image: "supportiveblog.png",
  },
  {
    title: "Building Better Habits for a Healthier You",
    description: "Transform your life by adopting small, impactful habits that pave the way for a healthier lifestyle....",
    category: "Self-Improvement",
    image: "supportiveblog.png",
  },
  ]
  return (
    <div className=' flex flex-col justify-center items-center py-20 bg-[#111111]'>
             <div className={` ${isLgScreen ? "text-[40px] gap-4" : "text-[30px] gap-2" } flex justify-center items-center  font-semibold`}>
              <span className="text-[#808080]">Our </span>
              <span className="text-[#d9d9d9]">Supportive Blogs</span>
            </div>
            <div className={`below  ${isLgScreen ? "flex gap-[24px]  py-[80px]" : "flex flex-col gap-[60px] py-[40px]" }  justify-center items-center  `}>
              {blogData.map((blog, index)=>
  <div key={index} className={`card rounded-[24px] ${isLgScreen ? "w-[385px] h-[637px]" : "w-[290px] h-[530px]" } border-[1px] overflow-hidden border-[#464646]`}>
  <img  src={blog.image} alt="" />
  <div className={`bootm text-[#d9d9d9]  ${isLgScreen ? "px-[24px] py-[40px]" : "px-3 py-[30px]" } `}>
  <h2 className={` ${isLgScreen ? "text-[24px]" : "text-[20px]" } pb-[16px] font-bold`}>{blog.title}</h2>
  <span className={`${isLgScreen ? "text-[18px]" : "text-[16px]" }`}>{blog.description}</span>
  <div className='pt-[40px] flex justify-between items-center'>
      <span className='text-[20px]'>{blog.category}</span>
      <div onClick={handleViewBlogDesc} className="btn text-[28px] bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9]  hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)]  shadow-[0_0_17px_7px_rgba(217,217,217,0.2)]  hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full  bg-gradient-to-t from-transparent to-[#d9d9d9]">
<div className="bg-[#111111] h-fit hover:bg-[#d9d9d9] p-2 rounded-full" style={{ backgroundClip: 'padding-box' ,
// boxShadow: 'inset 0 0 20px rgba(217, 217, 217, 0.3)', 
}}>
<GoArrowRight />

</div>
</div>
     
  </div>
  </div>
 

</div>

              )}
              
              
            </div>
    </div>
  )
}

export default Ourblogs