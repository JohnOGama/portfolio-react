import React, { useEffect } from "react";
import ExperienceReusable from "./ExperienceReusable";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full h-screen dark:text-black text-white">
      <div className="max-w-7xl mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-offset="300"
        >
          <h1 className="text-center font-[500] text-5xl md:text-7xl">
            Experience
          </h1>

          <p className="text-center my-2 md:text-2xl ">My stack Journey</p>
        </div>
        <div
          className="my-20 "
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-offset="500"
        >
          <ExperienceReusable
            titleFirst="React JS"
            dayFirst="Current"
            titleSecond="JavaScript"
            daySecond="01/22/23 - 03/24/23"
            titleThird="CSS 3"
            dayThird="12/17/22 - 01/31/23"
            titleFourth="HTML 5"
            dayFourth="12/21/23 - 01/1/23"
          />
        </div>
        <h1
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-offset="100"
        >
          See here in my{" "}
          <a
            className="text-[#275efe] hover:underline"
            href="https://github.com/JohnOGama?tab=repositories"
            target="blank"
          >
            Github Repo.
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Experience;
