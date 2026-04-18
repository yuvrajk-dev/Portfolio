import React from "react";

const Footer = () => {
  return (
    <section className="sticky -z-10  bg-(--bg-dark) bottom-0 left-0 h-16 w-full flex justify-around items-center ">
      <p className="text-sm">
        UPDATED <span className="ml-2">2026.03.18</span>
      </p>

      <p className="text-sm">
        © 2026 Yuvraj Kumar · React · Tailwind · Motion.dev
      </p>
    </section>
  );
};

export default Footer;
