import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useScroll } from "motion/react";
import Footer from "./Footer";
import ScrollReset from "../utils/ScrollReset";

const Layout = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="relative  flex flex-col min-h-screen  ">
        <Navbar />
        <ScrollReset />
        <Outlet context={scrollYProgress} />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
