import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import Loading from "./Loading";
import MobileProj from "./components/MobileProj";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading className="duration-500" />
      ) : (
        <div className="bg-[#121232] dark:bg-white duration-500">
          <Navbar />
          <Header />
          <Projects />

          <About />
          <Stack />
          <Experience />
          <GetInTouch />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
