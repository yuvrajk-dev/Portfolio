import { useState } from "react";
import { motion } from "motion/react";
import NavbarMenu from "./NavbarMenu";
import NavToggleButton from "./NavToggleButton";
import NavbarClock from "./NavbarClock";
import { useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let menuRef = useRef(null);

  return (
    <header className="sticky  top-0 px-8  z-999 flex  text-xl  items-center justify-between h-20  ">
      <div className="flex  justify-center  items-center gap-2 ">
        {/* left */}
        <motion.div
          className=" rounded-full w-3 h-3 "
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.5, 1],
            background: ["var(--text)", "var(--text-muted)", "var(--text)"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            // type: "spring",
            stiffness: 200,
          }}
        ></motion.div>
        <p className="  leading-none translate-y-px">INDIA</p>
        <span className=" leading-none translate-y-px  ">
          <NavbarClock />
        </span>
      </div>

      {/* right */}
      <div ref={menuRef} className=" relative z-10">
        <NavToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* right card */}
        <NavbarMenu menuRef={menuRef} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Navbar;
