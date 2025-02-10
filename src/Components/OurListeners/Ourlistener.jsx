import React from 'react';
import { useNavigate } from 'react-router-dom';

function Ourlistener() {
  const navigate = useNavigate();
  const isLgScreen = window.innerWidth >= 1024; // Check if the screen size is large


  const handleViewListenerDesc = ({data}) => {
   navigate("/Ourlistener", { state: data });
  };

  const listeners = [
    {
      name: "Mohit Asnani",
      age: "26 yrs",
      languages: "Hin, Eng, Guj",
      rating: 4.5,
      reviews: 20,
      experience: "150 Hrs",
      description: "I ha ve served the nation ffin the lorem45ve served the nation in the lorem45ve served the nation in the lorem45 served the nation in the lorem45Indian Navy for 35 years...",
      image: "profile.png",
    },
    {
      name: "Mohit Asnani",
      age: "26 yrs",
      languages: "Hin, Eng, Guj",
      rating: 4.5,
      reviews: 20,
      experience: "150 Hrs",
      description: "I ha ve served the nation in the lorin the lorem45ve served the nation in the lorem45ve served the nation in the lorem45 served the nation in the lorem45Indian Navy for 35 years...",
      image: "profile.png",
    },
    {
      name: "Mohit Asnani",
      age: "26 yrs",
      languages: "Hin, Eng, Guj",
      rating: 4.5,
      reviews: 20,
      experience: "150 Hrs",
      description: "I ha ve served thve served the nation in tuuuu uuuuuuuu uuuuuuuuhe lorem45ve served the nation in the lorem45 served the nation in the lorem45Indian Navy for 35 years...",
      image: "profile.png",
    },
    {
      name: "Mohit Asnani",
      age: "26 yrs",
      languages: "Hin, Eng, Guj",
      rating: 4.5,
      reviews: 20,
      experience: "150 Hrs",
      description: "I ha ve served the nation g the lorem45  lorem45 veve sn ve served the nation in the lorem45ve served the nation in the lorem45 served the nation in the lorem45Indian Navy for 35 years...",
      image: "profile.png"
    },
    {
      name: "Mohit Asnani",
      age: "26 yrs",
      languages: "Hin, Eng, Guj",
      rating: 4.5,
      reviews: 20,
      experience: "150 Hrs",
      description: "I ha ve servedn in the lorem45ve gbgbbgbgb served th lorem45  served th lorem4  served th lorem4 served the nation in the lorem45Indian Navy for 35 years...",
      image: "profile.png",
    },
    {
      name: "Mohit Asnani",
      age: "26 yrs",
      languages: "Hin, Eng, Guj",
      rating: 4.5,
      reviews: 20,
      experience: "150 Hrs",
      description: "I ha ve servon in the lorem45ve served the  served th lorem4  served th lorem4 nation in the lorem45 served the nation in the lorem45Indian Navy for 35 years...",
      image: "profile.png",
    },
    // Add more listener objects as needed
  ];
  

  return (
    <div className='bg-[#111111] flex flex-col  justify-center items-center  px  '>
      <div className={`heading ${isLgScreen ? "text-[60px] flex py-20 gap-4" : "text-[30px] flex flex-col py-12 " }   justify-center items-center   font-semibold`}>
        <span className="text-[#808080]">Meet Our Caring</span>
        <span className="text-[#d9d9d9]">Listeners</span>
      </div>
      <div className="cards pb-20 flex flex-wrap justify-center gap-[24px]">
        {listeners.map((listener, index) => (
          <div key={index} className={`card rounded-[16px] bg-[#1f1f1f] py-[40px]   ${isLgScreen ? "px-[24px] w-[411px]" : "px-3 w-[300px]" }  h-[560px] `}>
            <div className="upper gap-[28px] flex">
              <div className='left flex flex-col justify-center items-center'>
                <img
                  src={listener.image}
                  alt={`${listener.name}'s Image`}
                  className={`top-[8%]  ${isLgScreen ? "w-[140px]" : "w-[100px]" }
                     h-auto`}
                />
                <div className={` ${ isLgScreen ? "py-2 w-[125px] text-[18px]" : "py-1 w-[90px] text-[14px]" } mt-[-12px]  text-center font-normal bg-[#464646] text-[#d9d9d9]  rounded-[40px]`}>
                  F - {listener.age}
                </div>
              </div>
              <div className="right gap-[16px]">
                <span className='text-[24px] text-[#d9d9d9]'>{listener?.name}</span>
                <div className="star flex items-center py-[12px] gap-[12px]">
                  <img src="caringlistenerstar.svg" alt="Star" />
                  <span className='text-[18px] font-normal text-[#808080]'>{listener.rating}({listener.reviews})</span>
                </div>
                <div className="star flex items-center gap-[12px]">
                  <img src="caringlistenerlanguage.svg" alt="Languages" />
                  <span className='text-[18px] font-normal text-[#808080]'>{listener.languages}</span>
                </div>
              </div>
            </div>
            <div className="decs py-[40px] text-[18px] overflow-hidden line-clamp-6 text-[#808080] font-normal">
              {listener.description} ... read more
            </div>
            <div className="below flex justify-between items-center">
              <span className='text-[20px] font-medium text-[#d9d9d9]'>Exp-{listener.experience}</span>
              <div onClick={()=>handleViewListenerDesc({data:listener})} className={`text-[#111111] ${isLgScreen ?"text-[18px] px-[2px] py-[2px]" :" text-[15px] px-[2px]" } bg-[#d9d9d9] hover:bg-[#d9d9d9] hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold  duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]`}>
                <button className={` ${isLgScreen ? "px-6 py-3" : "px-4 py-3" }  rounded-full`} style={{ backgroundClip: 'padding-box' }}>
                  Connect Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ourlistener;
