import React, { useEffect } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import PROF from "../assets/profile1.jpg";
import RESUME from "../assets/ojdResume.pdf";
function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-7xl mx-auto h-screen dark:text-black  text-white mt-[300px] md:mt-[400px] px-8">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-offset="300"
      >
        <h1 className="text-center font-[500] text-5xl md:text-7xl">
          About Me
        </h1>
        <p className="text-center my-2 md:text-2xl">Personal</p>
      </div>
      <div
        className="flex flex-col-reverse lg:flex-row  mt-10 md:mt-[80px]"
        data-aos="fade-right"
        data-aos-duration="900"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-offset="500"
      >
        <img
          src={PROF}
          className="w-[450px] md:w-[550px] mt-8 lg:mt-0 mx-auto lg:mr-6 dark:shadow-2xl rounded-lg"
        />
        <div
          className=" md:max-w-[600px] mx-auto"
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-offset="500"
        >
          <p className="text-center lg:text-left font-[500]">
            I'm 1st year ComScie Student. I don't have any work experience. But
            I know the fundamentals of Front-End Dev I learned it from YouTube
            and reading Documentation. I started learning the basics of
            front-end development in December last year of 2022, beginning with
            HTML, CSS and JAVASCRIPT. Currently, I am learning ReactJS and
            Tailwind CSS. You can see
            <a className="text-[#275efe] font-[500] cursor-pointer hover:underline ml-2">
              here
            </a>
          </p>
          <a href={RESUME} target="blank">
            <button className="flex mx-auto dark:text-white lg:mx-0 items-center px-5 py-2 rounded-lg mt-5 bg-[#275efe] hover:bg-[#275efe]/90">
              Download CV
              <BsFillArrowDownCircleFill className="ml-3" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
