import React, { useState, useEffect } from "react";

import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

function DarkModeBtn() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    if (window.matchMedia("prefer-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handlerChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  onWindowMatch();

  return (
    <>
      <label>
        <input
          className="toggle-checkbox"
          onClick={handlerChange}
          type="checkbox"
        />
        <div className="toggle-slot">
          <div className="sun-icon-wrapper">
            <div
              className="iconify sun-icon"
              data-icon="feather-sun"
              data-inline="false"
            ></div>
          </div>
          <div className="toggle-button"></div>
          <div className="moon-icon-wrapper">
            <div
              className="iconify moon-icon"
              data-icon="feather-moon"
              data-inline="false"
            ></div>
          </div>
        </div>
      </label>
    </>
  );
}

export default DarkModeBtn;
