import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";



function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
    const navigate =useNavigate ()
    


    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const handleviewHomepage = () => {
        navigate ("/")

    }

    return (
      <>
        <div className="black-overlay"></div>
        <div className="w-full bg-[#1f1f1f] lg:px-[100px] md:px-8 lg:py-1 pt-2 border-b-[1px] border-[#808080] font-sans font-medium flex justify-between items-center">
          <div
            onClick={handleviewHomepage}
            className="left flex items-center  cursor-pointer"
          >
            <div>
              <img
                className={` ${isLgScreen ? "w-20" : "w-[55px] ml-3 py-2"}
                    }`}
                src="Logo.svg"
                alt="Logo"
              />
            </div>

            <div className='text-white pl-2 text-[14px] font-light'>India's most trusted<br/> emotional support platform</div>
            {/*  */}
          </div>
          <div className="right flex justify-between items-center lg:gap-[40px] md:gap-[20px]">
            <div className="hidden md:flex text-[18px] lg:gap-[40px] md:gap-[20px]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-[9px] pb-[4px] ${
                    isActive
                      ? "text-white border-b-[1px] border-white"
                      : "text-[#808080]"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/OurListeners"
                className={({ isActive }) =>
                  `px-[9px] pb-[4px] ${
                    isActive
                      ? "text-white border-b-[1px] border-white"
                      : "text-[#808080]"
                  }`
                }
              >
                Our Listeners
              </NavLink>
              <NavLink
                to="/OurBlogs"
                className={({ isActive }) =>
                  `px-[9px] pb-[4px] ${
                    isActive
                      ? "text-white border-b-[1px] border-white"
                      : "text-[#808080]"
                  }`
                }
              >
                Blogs
              </NavLink>
              <NavLink
                to="/BecomeListener"
                className={({ isActive }) =>
                  `px-[9px] pb-[4px] ${
                    isActive
                      ? "text-white border-b-[1px] border-white"
                      : "text-[#808080]"
                  }`
                }
              >
                Become a Listener
              </NavLink>
            </div>
            <div className="hidden md:flex btn">
              <button
                className="text-[18px] border text-[#d9d9d9] hover:bg-[#d9d9d9] hover:text-[#111111] border-white rounded-[40px] px-7 py-[7px]"
                type="button"
              >
                Download App
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                className="text-white mr-6 p-2 bg-[#464646] rounded-full text-[25px]"
              >
                <RxHamburgerMenu />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 h-full bg-[#1f1f1f] w-[250px] transform ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <button
            onClick={toggleSidebar}
            className="text-white text-[28px] absolute top-6  p-2 bg-[#464646] rounded-full right-8"
          >
            <RxCross2 />
          </button>
          <nav className="mt-20">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2 text-[18px] ${
                  isActive ? "text-white" : "text-[#808080]"
                }`
              }
              onClick={toggleSidebar}
            >
              Home
            </NavLink>
            <NavLink
              to="/OurListeners"
              className={({ isActive }) =>
                `block px-4 py-2 text-[18px] ${
                  isActive ? "text-white" : "text-[#808080]"
                }`
              }
              onClick={toggleSidebar}
            >
              Our Listeners
            </NavLink>
            <NavLink
              to="/OurBlogs"
              className={({ isActive }) =>
                `block px-4 py-2 text-[18px] ${
                  isActive ? "text-white" : "text-[#808080]"
                }`
              }
              onClick={toggleSidebar}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/BecomeListener"
              className={({ isActive }) =>
                `block px-4 py-2 text-[18px] ${
                  isActive ? "text-white" : "text-[#808080]"
                }`
              }
              onClick={toggleSidebar}
            >
              Become a Listener
            </NavLink>
            {/* <div onClick={toggleSidebar} className="playstore mt-4 text-white w-[80%] flex justify-start items-center border-[1px] px-3 py-[5px] rounded-[6px] border-white mx-4">
                        <img className='w-6' src="sm-playstore.svg" alt="" srcset="" />
                    <span className='pl-3 text-[18px]'>                        Download App
                    </span>

                    </div>
                    <div onClick={toggleSidebar} className="playstore mt-4 text-white w-[80%] flex justify-start items-center border-[1px] px-3 py-[5px] rounded-[6px] border-white mx-4">
                        <img className='w-6' src="sm-apple.svg" alt="" srcset="" />
                    <span className='pl-3 text-[18px]'>                        Download App
                    </span>

                    </div> */}
            {/* <button
                    
                        className="block text-[18px] border text-[#d9d9d9] hover:bg-[#d9d9d9] hover:text-[#111111] border-white rounded-[40px] px-4 py-[7px] mt-4 mx-4"
                        type="button"
                        onClick={toggleSidebar}
                    >
                    </button> */}
          </nav>
        </div>
      </>
    );
}

export default Header;
