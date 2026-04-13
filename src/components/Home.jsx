import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" flex flex-col min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
