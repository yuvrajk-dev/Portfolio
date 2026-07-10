import { motion } from "motion/react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavbarMenu = ({ isOpen, setIsOpen, menuRef }) => {
  const menuItems = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef.current) return;
      if (menuRef.current.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen, menuRef]);

  return (
    <motion.div
      variants={{
        open: { x: 0, rotate: 0 },
        close: { x: "150%", rotate: 10 },
      }}
      initial="close"
      animate={isOpen ? "open" : "close"}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="  flex  p-10 items-center text-center lg:text-left md:text-left b   text-5xl   rounded-2xl right-[5vw] lg:right-5 md:right-5 w-[90vw] md:w-[40vw] lg:w-[30vw] bg-(--bg-light) h-[70vh] lg:h-110 md:h-110 top-25 z-50  fixed"
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
        {menuItems.map((items, i) => {
          return (
            <motion.li
              key={i}
              className="cursor-pointer  hover:text-(--text-muted)"
              whileHover={{ x: 15 }}
              transition={{ type: "spring", stiffness: 200 }}
              variants={{
                close: { x: 30, opacity: 0 },
                open: { x: 0, opacity: 1 },
              }}
            >
              <NavLink
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-(--text)" : "text-(--text-muted)"
                }
                to={`/${items}`}
              >
                {items}
              </NavLink>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default NavbarMenu;
