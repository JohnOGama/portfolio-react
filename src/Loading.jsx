import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center bg-[#121232] h-screen w-full">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
}

export default Loading;
