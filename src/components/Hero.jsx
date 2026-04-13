import React from "react";
import AuthorBio from "./AuthorBio";
import AuthorName from "./AuthorName";
import Cards from "./Cards";
import Contact from "./Contact";

const Hero = () => {
  return (
    <>
      <div className=" flex flex-col flex-1  justify-center items-center">
        <AuthorName />
        <AuthorBio />
        <Cards />
      </div>
    </>
  );
};

export default Hero;
