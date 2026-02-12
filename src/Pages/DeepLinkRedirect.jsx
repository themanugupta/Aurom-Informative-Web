import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Home/Header";
import Footer from "../Components/Home/Footer";

function DeepLinkRedirect() {
  const location = useLocation();
  const isRefer = location.pathname.startsWith("/refer");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Header />
      <div
        className="flex flex-col items-center justify-center text-center px-5"
        style={{ minHeight: "60vh" }}
      >
        <h1 className="text-[#d9d9d9] text-[36px] font-bold mb-4">
          {isRefer ? "You've been referred!" : "Check out this listener!"}
        </h1>
        <p className="text-[#808080] text-[18px] mb-8 max-w-[500px]">
          {isRefer
            ? "Download the Aurom app to use your referral code and get started."
            : "Download the Aurom app to view this listener's profile and connect."}
        </p>
        <div className="flex gap-4 items-center">
          <img
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.myhearspace",
                "_blank"
              )
            }
            className="w-[180px] cursor-pointer"
            src="/playstore.svg"
            alt="Get it on Google Play"
          />
          <img
            onClick={() =>
              window.open(
                "https://apps.apple.com/in/app/aurom-you-matter/id6740231514",
                "_blank"
              )
            }
            className="w-[180px] cursor-pointer"
            src="/appstore.svg"
            alt="Download on App Store"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DeepLinkRedirect;
