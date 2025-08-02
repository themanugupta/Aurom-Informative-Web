import React, { useState } from "react";
import Header from "../Components/Home/Header";
import Footer from "../Components/Home/Footer";

function PrivacyPolicyPage() {
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
          <span className="text-[40px] font-bold">Privacy Policy</span>
          <span className="text-[20px] font-normal pt-[10px]">
            Effective Date: 20 May 2025
          </span>
        </div>

        <div className="text-[20px] font-normal">
          Welcome to <strong>Aurom</strong> ("we", "our", or "us"). We value
          your trust and are committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you use our mobile application ("App"). <br />
          <br />
          If you have any questions or concerns, please contact us at{" "}
          <a
            href="mailto:auromapp@gmail.com"
            className="underline text-[#d9d9d9]"
          >
            auromapp@gmail.com
          </a>
          .
        </div>

        <div>
          <h3 className="text-[32px] font-bold pb-[16px]">
            1. Information We Collect
          </h3>
          <div className="text-[20px] font-normal">
            <strong>a. Personal Information</strong>
            <br />
            - Mobile number – required for registration and authentication.
            <br />
            <br />
            <strong>b. Device Information</strong>
            <br />
            - Device ID and related identifiers to ensure a secure and
            personalized experience.
            <br />
            <br />
            <strong>c. Usage Data</strong>
            <br />- We collect information about your interactions within the
            app, including features used and session time, to improve
            performance and functionality.
          </div>
        </div>

        <div>
          <h3 className="text-[32px] font-bold pb-[16px]">
            2. How We Use Your Information
          </h3>
          <div className="text-[20px] font-normal">
            We use the collected information to:
            <br />
            - Authenticate users and manage accounts
            <br />
            - Process payments (via Razorpay)
            <br />
            - Improve app functionality and user experience
            <br />
            - Monitor and analyze usage trends
            <br />- Ensure security and prevent fraud
          </div>
        </div>

        <div>
          <h3 className="text-[32px] font-bold pb-[16px]">
            3. Third-Party Services
          </h3>
          <div className="text-[20px] font-normal">
            We use third-party services to help operate our app. These providers
            may access your data only to perform tasks on our behalf:
            <br />
            <br />- Razorpay (for secure payment processing):{" "}
            <a
              href="https://razorpay.com/privacy/"
              target="_blank"
              rel="noreferrer"
              className="underline text-[#d9d9d9]"
            >
              View Privacy Policy
            </a>
            <br />- Agora (for audio/video communication):{" "}
            <a
              href="https://www.agora.io/en/privacy-policy/"
              target="_blank"
              rel="noreferrer"
              className="underline text-[#d9d9d9]"
            >
              View Privacy Policy
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[32px] font-bold pb-[16px]">4. Data Retention</h3>
          <div className="text-[20px] font-normal">
            We retain your data while your account is active or needed to
            provide our services. You may request deletion at any time.
          </div>
        </div>

        <div>
          <h3 className="text-[32px] font-bold pb-[16px]">5. Your Rights</h3>
          <div className="text-[20px] font-normal">
            You have the right to:
            <br />
            - Access your personal data
            <br />
            - Request correction or deletion
            <br />
            - Withdraw consent (where applicable)
            <br />
            <br />
            To request this, email us at{" "}
            <a
              href="mailto:auromapp@gmail.com"
              className="underline text-[#d9d9d9]"
            >
              auromapp@gmail.com
            </a>
            .
          </div>
        </div>

        <div>
          <h3 className="text-[32px] font-bold pb-[16px]">
            6. Account Deletion
          </h3>
          <div className="text-[20px] font-normal">
            To delete your account and data, email us at{" "}
            <a
              href="mailto:auromapp@gmail.com"
              className="underline text-[#d9d9d9]"
            >
              auromapp@gmail.com
            </a>{" "}
            with the subject line “Delete My Account”.
          </div>
        </div>

        <div>
          <h3 className="text-[32px] font-bold pb-[16px]">
            7. Children's Privacy
          </h3>
          <div className="text-[20px] font-normal">
            Aurom is not intended for children under 16. We do not knowingly
            collect data from minors.
          </div>
        </div>

        <div>
          <h3 className="text-[32px] font-bold pb-[16px]">8. Security</h3>
          <div className="text-[20px] font-normal">
            We implement safeguards to protect your data. However, no method is
            100% secure.
          </div>
        </div>

        <div>
          <h3 className="text-[32px] font-bold pb-[16px]">
            9. Changes to This Privacy Policy
          </h3>
          <div className="text-[20px] font-normal">
            We may update this policy occasionally. Changes will be posted
            in-app and/or via email notifications.
          </div>
        </div>

        <div>
          <h3 className="text-[32px] font-bold pb-[16px]">10. Contact Us</h3>
          <div className="text-[20px] font-normal">
            For questions, contact us at: <br />
            <a
              href="mailto:auromapp@gmail.com"
              className="underline text-[#d9d9d9]"
            >
              auromapp@gmail.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicyPage;
