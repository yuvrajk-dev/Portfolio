import React from "react";

const Footer = () => {
  return (
    <section className="sticky -z-10  bg-(--bg-dark) bottom-0 left-0 h-16 w-full flex justify-around items-center ">
      <p className="lg:text-sm md:text-sm text-xs">
        UPDATED <span className="ml-2">2026.07.11</span>
      </p>

      <p className="lg:text-sm md:text-sm text-xs">
        © 2026 Yuvraj Kumar · React · Tailwind · Socket.IO · Motion.dev
      </p>
    </section>
  );
};

export default Footer;
