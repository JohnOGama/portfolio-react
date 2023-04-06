import React, { useEffect } from "react";
import IconTech from "./IconTech";
import AOS from "aos";
import "aos/dist/aos.css";
import HTML from "../assets/html.png";
import CSS from "../assets/css1.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import FIGMA from "../assets/figma.webp";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

function Stack() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full h-screen  dark:text-black text-white px-5 overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-offset="300"
        >
          <h1 className="text-center font-[500] text-5xl md:text-7xl">
            Skills
          </h1>
          <p className="text-center my-2 md:text-2xl">Tech Stack</p>
        </div>
        <div
          className="bg-[#474E68]/30 dark:bg-[#FDF6F0]/50 shadow-2xl rounded-2xl grid grid-cols-2 sm:grid-cols-4 py-7 px-5 w-full lg:w-[800px] lg:gap-5 mx-auto gap-8 text-center lg:grid-cols-5 mt-10 items-center h-auto"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-offset="500"
        >
          <IconTech icon={HTML} title="HTML 5" width={70} />
          <IconTech icon={CSS} title="CSS 3" width={70} />
          <IconTech icon={Tailwind} title="tailwind CSS" width={70} />
          <IconTech icon={JavaScript} title="JavaScript" width={70} />
          <IconTech icon={ReactImg} title="React JS" width={70} />
          <IconTech icon={GitHub} title="Github" width={70} />
          <IconTech icon={FIGMA} title="Figma" width={70} />
          {/* <IconTech
            width={80}
            icon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png"
            title="Sass"
          />
          <IconTech
            width={80}
            icon="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
            title="Bootstrap"
          />
          <IconTech
            width={70}
            icon="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"
            title="Material UI"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Stack;
