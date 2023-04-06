import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
import HTML from "../assets/html.png";
import CSS from "../assets/css1.png";
import REACT from "../assets/react.png";
import TAILWIND from "../assets/tailwind.png";
import FOOD from "../assets/FoodHub.png";
import TRAVEL from "../assets/TravelHub.png";
import ECO from "../assets/EcommerceHub.png";
import TRAVEL1 from "../assets/TravelHub2.png";
import LAZADA from "../assets/lazada.png";
import PYTHON from "../assets/game.png";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-7xl h-auto md:h-auto mx-auto dark:text-black text-white py-[70px] px-4">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-offset="300"
      >
        <h1 className="text-center font-[500] text-5xl md:text-7xl">
          Portfolio
        </h1>
        <p className="text-center my-2 md:text-2xl">Personal Projects</p>
      </div>
      {/* <div className="hidden sm:block"> */}
      <div
        className=" px-7 grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:px-4 mt-10 md:mt-[80px]"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-offset="500"
      >
        {/* <Slider {...settings}> */}
        <ProjectCard
          image={FOOD}
          title="Burger Hub"
          source="https://ogama-react-food.netlify.app/"
          target="_blank"
          demo="https://ogama-react-food.netlify.app/"
          date="MARCH 13, 2023"
          made={REACT}
          made2={TAILWIND}
          add="+"
          repo="https://github.com/JohnOGama/react-food"
        />

        <ProjectCard
          image={TRAVEL}
          title="Travel Hub"
          source="https://ogama-react-travel.netlify.app/"
          target="_blank"
          demo="https://ogama-react-travel.netlify.app/"
          date="MARCH 28, 2023"
          made={REACT}
          made2={TAILWIND}
          add="+"
          repo="https://github.com/JohnOGama/react-travel"
        />

        <ProjectCard
          image={ECO}
          title="Ecommerce Hub"
          source="https://ogama-react-ecommerce.netlify.app/"
          target="_blank"
          sub=" + API"
          demo="https://ogama-react-ecommerce.netlify.app/"
          date="MARCH 23, 2023"
          made={REACT}
          made2={TAILWIND}
          add="+"
          repo="https://github.com/JohnOGama/react-ecommerce"
        />
        <ProjectCard
          image={PYTHON}
          title="Python Game based on terminal (School Project)"
          source="https://onlinegdb.com/KCPEBcEOY"
          target="_blank"
          demo="https://onlinegdb.com/KCPEBcEOY"
          repo="https://onlinegdb.com/KCPEBcEOY"
          date="JANUARY, 2022"
          made="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
        />
        <ProjectCard
          image={LAZADA}
          title="Lazada Landing Page"
          source="https://johnogama.github.io/lazada-homepage/"
          target="_blank"
          demo="https://johnogama.github.io/lazada-homepage/"
          repo="https://github.com/JohnOGama/lazada-homepage"
          date="FEBRUARY 22, 2023"
          made={HTML}
          add="+"
          made2={CSS}
        />
        <ProjectCard
          image={TRAVEL1}
          title="My first landing page Project"
          source="https://johnogama.github.io/travel-website/"
          target="_blank"
          demo="https://johnogama.github.io/travel-website/"
          repo="https://github.com/JohnOGama/travel-website"
          date="JANUARY 24, 2023"
          made={HTML}
          add="+"
          made2={CSS}
        />
        {/* </Slider> */}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Projects;
