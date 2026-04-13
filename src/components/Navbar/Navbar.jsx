import { useState, useEffect } from "react";
import { motion } from "motion/react";
import NavbarMenu from "./NavbarMenu";
import NavToggleButton from "./NavToggleButton";

const Navbar = () => {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const indianTime = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setTime(indianTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

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
        <span className=" leading-none translate-y-px  ">{time}</span>
      </div>

      {/* right */}
      <div className=" relative z-10">
        <NavToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* right card */}
        <NavbarMenu isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Navbar;
