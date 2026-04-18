import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useScroll } from "motion/react";
import Footer from "./Footer";

const Layout = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="relative flex flex-col min-h-screen  ">
        <Navbar />
        <Outlet context={scrollYProgress} />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
