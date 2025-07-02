import React, { useEffect, useState } from 'react'
import Oursupprtiveblogs from '../Home/Oursupprtiveblogs'
import { GoArrowRight } from "react-icons/go";
import { useLocation, useNavigate } from 'react-router-dom';
  // const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);






function Ourblogs() {
    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
    const [blogs, setBlogs] = useState([])  
  const navigate=useNavigate();
  



  const handleViewBlogDesc=(item)=>{
    navigate("/Blogsdesc", {
      state: item,
    });
  }

  useEffect(() => {
    fetchBlogs();
  }, []);


  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://backend.auromapp.com/api/blogs/all"
      );
      if (!response.ok) throw new Error("Failed to fetch blogs");
      const data = await response.json();
      setBlogs(data?.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
    }
  };

 


  return (
    <div className=" flex flex-col justify-center items-center py-20 bg-[#111111]">
      <div
        className={` ${
          isLgScreen ? "text-[40px]  gap-4" : "text-[30px] gap-2"
        } flex justify-center items-center  font-semibold`}
      >
        <span className="text-[#808080]">Our </span>
        <span className="text-[#d9d9d9]">Supportive Blogs</span>
      </div>
      {blogs?.length > 0 && (
        <div
          className={`below  ${
            isLgScreen
              ? "flex gap-[24px] flex-wrap justify-center  py-[80px]"
              : "flex flex-col gap-[60px] py-[40px]"
          }   items-center  `}
        >
          {blogs &&
            blogs.map((blog, index) => (
              <div
                key={index}
                className={`card rounded-[24px] ${
                  isLgScreen ? "w-[385px] h-[637px]" : "w-[290px] h-[530px]"
                } border-[1px] overflow-hidden border-[#464646]`}
              >
                <img
                  className="w-full h-[200px]"
                  src={blog.blogThumbnail}
                  alt=""
                />
                <div
                  className={`bootm text-[#d9d9d9]  ${
                    isLgScreen ? "px-[24px] py-[40px]" : "px-3 py-[30px]"
                  } `}
                >
                  <h2
                    className={` ${
                      isLgScreen ? "text-[24px]" : "text-[20px]"
                    } pb-[16px] font-bold`}
                  >
                    {blog.title}
                  </h2>
                  <span
                    className={`${isLgScreen ? "text-[18px]" : "text-[16px]"}`}
                  >
                    {blog.description}
                  </span>
                  <div className="pt-[40px] flex justify-between items-center">
                    <span className="text-[20px]">{blog.tag}</span>
                    <div
                      onClick={() => {
                        handleViewBlogDesc(blog);
                      }}
                      className="btn text-[28px] bg-[#111111] hover:bg-[#d9d9d9] text-[#d9d9d9]  hover:shadow-[0_0_30px_15px_rgba(217,217,217,0.2)]  shadow-[0_0_17px_7px_rgba(217,217,217,0.2)]  hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full  bg-gradient-to-t from-transparent to-[#d9d9d9]"
                    >
                      <div
                        className="bg-[#111111] h-fit hover:bg-[#d9d9d9] p-2 rounded-full"
                        style={{
                          backgroundClip: "padding-box",
                          // boxShadow: 'inset 0 0 20px rgba(217, 217, 217, 0.3)',
                        }}
                      >
                        <GoArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Ourblogs