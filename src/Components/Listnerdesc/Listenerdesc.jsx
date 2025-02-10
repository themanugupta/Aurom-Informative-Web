import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Listenerdesc() {
  const location = useLocation();
  const data = location.state;
  console.log("Received data: ", data);
  const isLgScreen = window.innerWidth >= 1024; // Check if the screen size is large


  const listeners = [
    {
      name: data.name,
      age: data.age,
      languages: "Hin, Eng, Guj",
      rating: data.rating,
      reviews: 20,
      experience: " 20+ Hrs",
      description: data.description,
      image: data.image,
    },
  ];
  return (
//     <div className=' bg-[#111111] flex justify-center pt-[80px] '>
//         <div className="card p-[40px] rounded-[16px]  bg-[#1f1f1f] w-[70%]">
//         <div className="upper gap-[28px] flex ">

           
// <div className=' left flex flex-col  justify-center '>
//     <img
//       src="profile.png"
//       alt="Feel Image"
//       className=" top-[8%]  w-[140px] h-auto"
//     />
//     <div className="  w-[125px] text-[18px]  text-center font-normal bg-[#464646] text-[#d9d9d9] px- py-2 rounded-[40px]">
//       F - 26 yrs
//     </div>
//   </div>
//   <div className="right gap-[16px]">
//     <span className='text-[24px] text-[#d9d9d9]'>Mohit Asnani</span>
//     <div className="star flex items-center py-[12px] gap-[12px]">
//         <img src="caringlistenerstar.svg" alt="" />
//         <span className='text-[18px] font-normal text-[#808080]'>4.5(20)</span>
//     </div>
//     <div className="star flex items-center gap-[12px]">
//         <img src="caringlistenerlanguage.svg" alt="" />
//         <span className='text-[18px] font-normal text-[#808080]'>Hin, Eng, Guj</span>
//     </div>
//   </div>
//   </div>
  
//   <div className="decs py-[40px] text-[20px] text-[#808080] font-normal">
//           I have served the nation in the Indian Navy for 35 years. It has providedfffff Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam aliafffffffffffff mfffffffffff with a humongous and kaleidoscope of experiences. I have seen people break down during tough times. I'm a qualified mentor ... read more
//           </div>
//           <div className="below flex justify-between items-center">
//             <span className='text-[24px] font-medium text-[#d9d9d9]'>Exp-150 Hrs</span>
//             <div className="  text-[#111111] text-[18px] bg-[#d9d9d9] hover:bg-[#d9d9d9]  hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold px-[2px] py-[2px] duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]">
//               <button 
//                 className=" px-6 py-3 rounded-full"
//                 style={{ backgroundClip: 'padding-box' }}
//               >
//                 Connect Now
//               </button>
//             </div>
//           </div>
//   </div>
  
        

//     </div>
<div className={`cards  ${isLgScreen ? "py-20" : "pt-20" } flex flex-wrap justify-center gap-[24px]`}>
{listeners.map((listener, index) => (
  <div key={index} className={`card rounded-[16px] bg-[#1f1f1f] py-[40px]   ${isLgScreen ? " w-px] mx-[200px] px-10" : "px-3 w-[300px] " }  h-[560px] `}>
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
        <span className='text-[24px] text-[#d9d9d9]'>{listener.name}</span>
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
      <div  className={`text-[#111111] ${isLgScreen ?"text-[18px] px-[2px] py-[2px]" :" text-[15px] px-[2px]" } bg-[#d9d9d9] hover:bg-[#d9d9d9] hover:shadow-[0_0_28px_13px_rgba(217,217,217,0.2)] shadow-[0_0_17px_7px_rgba(217,217,217,0.2)] hover:text-[#111111] font-semibold  duration-300 cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#d9d9d9]`}>
        <button className={` ${isLgScreen ? "px-6 py-3" : "px-4 py-2" }  rounded-full`} style={{ backgroundClip: 'padding-box' }}>
          Connect Now
        </button>
      </div>
    </div>
  </div>
))}
</div>
  )
}

export default Listenerdesc