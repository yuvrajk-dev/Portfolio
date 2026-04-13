import React from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const NavbarMenu = ({ isOpen }) => {
  const menuItems = ["about", "skills", "projects", "contact", "home"];
  return (
    <motion.div
      variants={{
        open: { x: 0, rotate: 0 },
        close: { x: "150%", rotate: 10 },
      }}
      initial="close"
      animate={isOpen ? "open" : "close"}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="  flex p-10 items-center text-center lg:text-left md:text-left b   text-5xl   rounded-2xl right-5  w-[90vw] md:w-[50vw] lg:w-[30vw] bg-(--bg) h-110 top-25 -z-10 fixed"
    >
      <motion.ul
        variants={{
          open: {
            transition: {
              delayChildren: 0.1,
              staggerChildren: 0.1,
            },
          },
          close: {
            transition: {
              staggerChildren: 0.05,
              staggerDirection: -1,
            },
          },
        }}
        className="flex flex-1 flex-col  gap-4"
      >
        {menuItems.map((items) => {
          return (
            <motion.li
              className="cursor-pointer  hover:text-(--text-muted)"
              whileHover={{ x: 15 }}
              transition={{ type: "spring", stiffness: 200 }}
              variants={{
                close: { x: 30, opacity: 0 },
                open: { x: 0, opacity: 1 },
              }}
            >
              <NavLink to={`/${items}`}>{items}</NavLink>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default NavbarMenu;
