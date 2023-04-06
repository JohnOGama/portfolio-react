import React from "react";
import ButtonCTA from "./ButtonCTA";
import HEADER from "../assets/header.jpg";

function Header() {
  return (
    <div className="w-full h-[800px] text-white dark:text-black px-4 ">
      <div className="max-w-7xl mx-auto xl:px-4 flex justify-between">
        <div className="mt-[200px] md:mx-0">
          <h1
            className="font-bold text-4xl md:text-6xl"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            John Ogama.
          </h1>
          <h2
            className="font-medium my-2 md:text-xl"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            Entry Front End Developer
          </h2>
          <p
            className="max-w-[500px] lg:text-lg md:max-w-[700px] mb-5 md:mb-8"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            My goal is to leverage my skillset to produce user-friendly
            interfaces that meet the needs of the target audience. I am
            committed to delivering high-quality work that aligns with the
            requirements gathered from stakeholders.
          </p>
          <ButtonCTA />
        </div>

        <img
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          src={HEADER}
          className="hover:scale-[1.1] w-[400px] h-[400px] rounded-full mt-[140px] object-cover hidden duration-300 lg:block dark:shadow-xl dark:shadow-black/70 "
        />
      </div>
    </div>
  );
}

export default Header;
