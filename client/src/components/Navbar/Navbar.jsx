import { useState, useRef } from "react";
import { motion } from "motion/react";
import NavbarMenu from "./NavbarMenu";
import NavToggleButton from "./NavToggleButton";
import NavbarClock from "./NavbarClock";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const arrowVariants = {
    rest: { x: 0 },
    hover: { x: 3 },
  };

  return (
    <header className="sticky top-0 z-999 flex h-20 items-center justify-between px-8 text-xl">
      <div className="flex items-center gap-2">
        <motion.div
          className="h-3 w-3 rounded-full"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.5, 1],
            background: ["var(--text)", "var(--text-muted)", "var(--text)"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            stiffness: 200,
          }}
        />

        <p className="leading-none translate-y-px">INDIA</p>

        <span className="leading-none translate-y-px">
          <NavbarClock />
        </span>
      </div>

      <div className="flex items-center gap-4">
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.96 }}
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.1 },
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
          }}
          className="group inline-flex items-center gap-1 font-medium underline underline-offset-4"
        >
          Resume
          <motion.span
            className="inline-block  "
            variants={arrowVariants}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
          >
            →
          </motion.span>
        </motion.a>

        <div ref={menuRef} className="relative z-10">
          <NavToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />

          <NavbarMenu menuRef={menuRef} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
