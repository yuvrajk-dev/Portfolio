import React, { useEffect, useEffectEvent, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useScroll } from "motion/react";

const Layout = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div ref={containerRef} className="relative flex flex-col min-h-[200vh] ">
        <Navbar />
        <Outlet context={scrollYProgress} />
      </div>
    </>
  );
};

export default Layout;
