import React from "react";

const Footer = () => {
  return (
    <div className="relative  h-32 flex-col  flex  w-full ">
      <div className=" h-16 w-full  z-999 bg-(--bg) flex items-center justify-center"></div>
      <section className="sticky bg-(--bg-dark) bottom-0 left-0 h-16 w-full flex justify-around items-center ">
        <p className="text-sm">
          UPDATED <span className="ml-2">2026.03.18</span>
        </p>

        <p className="text-sm">
          © 2026 Yuvraj Kumar · React · Tailwind · Motion.dev 🚀
        </p>
      </section>
    </div>
  );
};

export default Footer;
