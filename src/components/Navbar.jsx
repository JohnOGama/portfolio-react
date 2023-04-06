import React from "react";
import DarkModeBtn from "./DarkModeBtn";

function Navbar() {
  return (
    <div className="w-full text-white dark:text-black dark:shadow-lg ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 py-3 xl:px-4 md:py-5">
          <h1 className="font-bold text-3xl">OGAMA</h1>
          <DarkModeBtn />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
