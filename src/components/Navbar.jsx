import { useState, useEffect } from "react";
import { motion } from "motion/react";

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
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          initial="close"
          whileHover="hover"
          animate={isOpen ? "open" : "close"}
          variants={{ rest: { scale: 1 }, hover: { scale: 1.1 } }}
          className="py-1 border  rounded px-2 "
        >
          <motion.div className="flex gap-1  justify-center  items-center  ">
            {/* text start */}
            <motion.div className="relative  px-2   overflow-hidden">
              <motion.p
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                variants={{ open: { y: -30 }, close: { y: 0 } }}
                className="m-0  leading-none translate-y-px "
              >
                menu
              </motion.p>
              <motion.p
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                variants={{ open: { y: 0 }, close: { y: 30 } }}
                className="m-0   leading-none absolute inset-0 translate-y-px "
              >
                Close
              </motion.p>
            </motion.div>

            {/* end */}
            <motion.div
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              variants={{
                rest: { rotate: 0 },
                hover: { rotate: 90 },
              }}
              className={` rounded-full gap-0.5 flex bg-(--text) justify-center items-center w-4 h-4 `}
            >
              <div className={`  h-1 w-1 rounded-full bg-(--bg)`}></div>
              <div className={`  h-1 w-1 rounded-full bg-(--bg)`}></div>
            </motion.div>
          </motion.div>
        </motion.button>
        {/* right card */}
        <motion.div
          variants={{
            open: { x: 0, rotate: 0 },
            close: { x: "150%", rotate: 10 },
          }}
          initial="close"
          animate={isOpen ? "open" : "close"}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="  rounded-2xl right-5  w-100 bg-(--bg) h-110 top-25 -z-10 fixed"
        ></motion.div>
      </div>
    </header>
  );
};

export default Navbar;
