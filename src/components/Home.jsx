import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" flex flex-col">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
