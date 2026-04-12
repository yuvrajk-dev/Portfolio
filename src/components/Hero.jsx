import React from "react";
import AuthorBio from "./AuthorBio";
import AuthorName from "./AuthorName";
import Cards from "./Cards";
import Contact from "./Contact";

const Hero = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        <AuthorName />
        <AuthorBio />
        <Cards />
        <Contact />
      </div>
    </>
  );
};

export default Hero;
