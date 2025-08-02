import React, { useState } from "react";
import Header from "../Components/Home/Header";
import Footer from "../Components/Home/Footer";

function DeleteAccountPage() {
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

  return (
    <>
      <Header />
      <div
        className={`lg:w-[60%] ${
          isLgScreen ? "px-0" : "px-5"
        } py-[100px] text-[#d9d9d9] flex flex-col justify-center mx-auto gap-[40px]`}
      >
        <div className="headings flex flex-col text-left">
          <span className="text-[40px] font-bold">Delete Account</span>
          <span className="text-[20px] font-normal pt-[10px]">
            Manage your account deletion
          </span>
        </div>
        
        <div className="content">
          <p className="text-[16px] leading-relaxed mb-4">
            If you would like to delete your account, please contact our support team.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DeleteAccountPage;