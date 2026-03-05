import React from "react";

const Navbar = () => {
  return (
    <header className=" sticky top-3 z-50  flex justify-center  py-3 w-full ">
      <nav className=" shadow-sm border-1 border-[hsl(var(--border-color))] rounded-4xl  backdrop-blur-sm flex items-center justify-between w-[80vw] h-14">
        {/* logo */}
        <a href="/" className=" font-bold ml-10 text-lg  ">
          Yuvraj Kumar
        </a>
        {/* navigation */}
        <ul className="flex items-center mr-10  gap-8 font-medium">
          <li className="px-4 py-2 rounded-md   ">Projects</li>
          <li className="px-4 py-2 rounded-md ">About</li>
          <li className="px-4 py-2 rounded-md  ">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
