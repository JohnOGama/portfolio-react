import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

function ButtonCTA() {
  return (
    <button
      className="btn-cssbuttons"
      data-aos="fade-right"
      data-aos-duration="900"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <span>Contact Me</span>
      <span>
        <svg
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1024 1024"
          className="icon"
        >
          <path
            fill="#ffffff"
            d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"
          ></path>
        </svg>
      </span>
      <ul>
        <li>
          <a href="https://www.facebook.com/CreatorVayne/" target="blank">
            <BsFacebook className="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/JohnOGama" target="blank">
            <BsGithub className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/john-ogama-289124269/"
            target="blank"
          >
            <BsLinkedin className="icon" />
          </a>
        </li>
      </ul>
    </button>
  );
}

export default ButtonCTA;
