import React, { useEffect } from "react";
import ButtonCTA from "./ButtonCTA";
import AOS from "aos";
import "aos/dist/aos.css";

function GetInTouch() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full dark:text-black text-white h-[400px] md:h-[510px]">
      <div
        className="max-w-7xl mx-auto text-center px-10"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-offset="300"
      >
        <h1 className="font-[500] text-5xl lg:text-6xl">Get In Touch</h1>
        <p className="px-[60px] mb-10 mt-5 lg:mt-5 lg:text-2xl">
          I'm happy you get here. If you want my service let me know.
        </p>
        <a
          href="https://mail.google.com/mail/u/0/#inbox"
          className="bg-[#275efe] dark:text-white py-3 px-8 rounded-md lg:py-4 lg:px-12 hover:bg-[#275efe]/80 duration-300 font-[500] lg:text-xl"
          target="blank"
        >
          Let's Talk
        </a>
      </div>
    </div>
  );
}

export default GetInTouch;
