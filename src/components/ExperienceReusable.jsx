import React from "react";

function ExperienceReusable(props) {
  return (
    <div className="grid grid-cols-9 px-10">
      <div className="col-span-4 w-full text-right align-text-top">
        <h1 className="font-[500] text-white dark:text-black text-xl">
          {props.titleFirst}
        </h1>
        <p className="text-[13px] text-stone-500 font-[500] ">
          {props.dayFirst}
        </p>
      </div>
      <div className="relative col-span-1 h-full w-full flex justify-center ">
        <div className="h-full w-1 bg-[#275efe]"></div>
        <div className="absolute w-4 h-4 bg-[#275efe] rounded-full"></div>
      </div>
      <div className="col-span-4"></div>

      <div className="col-span-4"></div>
      <div className="relative col-span-1 h-full w-full flex justify-center items-center">
        <div className="h-full w-1 bg-[#275efe]"></div>
        <div className="absolute w-4 h-4 bg-[#275efe] rounded-full "></div>
      </div>
      <div className="col-span-4 w-full text-left my-5">
        <h1 className="font-[500] text-white dark:text-black text-xl">
          {props.titleSecond}
        </h1>
        <p className="text-[13px] text-stone-500 font-[500]">
          {props.daySecond}
        </p>
      </div>

      <div className="col-span-4 w-full text-right my-5">
        <h1 className="font-[500] text-white dark:text-black text-xl">
          {props.titleThird}
        </h1>
        <p className="text-[13px] text-stone-500 font-[500]">
          {props.dayThird}
        </p>
      </div>
      <div className="relative col-span-1 h-full w-full flex justify-center items-center">
        <div className="h-full w-1 bg-[#275efe]"></div>
        <div className="absolute w-4 h-4 bg-[#275efe] rounded-full"></div>
      </div>
      <div className="col-span-4"></div>

      <div className="col-span-4"></div>
      <div className="relative col-span-1 h-full w-full flex justify-center items-center">
        <div className="h-full w-1 bg-[#275efe]"></div>
        <div className="absolute w-4 h-4 bg-[#275efe] rounded-full "></div>
      </div>
      <div className="col-span-4 w-full text-left my-5">
        <h1 className="font-[500] text-white dark:text-black text-xl">
          {props.titleFourth}
        </h1>
        <p className="text-[13px] text-stone-500 font-[500]">
          {props.dayFourth}
        </p>
      </div>
    </div>
  );
}

export default ExperienceReusable;
