import React from "react";

function ProjectCard(props) {
  return (
    <div className="w-[300px] sm:w-[350px] md:w-[370px] lg:w-[380px] md:mb-10 h-auto mx-auto rounded-lg dark:shadow-xl dark:bg-[#FDF6F0]/50 dark:text-white overflow-hidden bg-[#474E68]/30 p-3">
      <a href={props.source} target={props.target}>
        <div className="w-full h-[300px] overflow-hidden rounded-t-lg relative">
          <img
            src={props.image}
            alt={props.title}
            className="w-full object-cover h-auto hover:scale-[1.1]  rounded-t-lg duration-700"
          />
          <div className="absolute bottom-5 pl-4 py-2 left-0 flex items-center bg-black/60  w-full group">
            <h1 className="mr-2 font-[500]">Made With</h1>
            <img src={props.made} width={34} />
            <span className="mx-2">{props.add}</span>
            <img src={props.made2} width={34} />
            <h1 className="ml-2"> {props.sub}</h1>
          </div>
        </div>
      </a>

      <div className="">
        <h1 className="font-bold text-xl md:text-2xl dark:text-black text-stone-100 mt-2">
          {props.title}
        </h1>
        <p className="text-stone-400 text-sm my-2 ">{props.date}</p>
        <div className="flex my-4">
          <a href={props.demo} target="blank" className="mr-4">
            <button className="flex mx-auto dark:text-white lg:mx-0 items-center px-6 py-2 rounded-lg bg-[#275efe] hover:bg-[#275efe]/90">
              Demo
            </button>
          </a>
          <a href={props.repo} target="blank">
            <button className="flex mx-auto dark:text-white lg:mx-0 items-center px-6 py-2 rounded-lg ml bg-[#275efe] hover:bg-[#275efe]/90">
              Repo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
