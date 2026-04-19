import React from "react";
import { useEffect, useState } from "react";
import { socket } from "./Socket";
import { motion } from "motion/react";

const MouseRender = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    socket.on("mouse", ({ id, x, y }) => {
      console.log("recieved:", { id, x, y });
      setUsers((prev) => {
        return { ...prev, [id]: { x, y } };
      });
    });

    socket.on("remove", (id) => {
      setUsers((prev) => {
        const remove = { ...prev };
        delete remove[id];
        return remove;
      });
    });

    return () => {
      socket.off("mouse");
      socket.off("remove");
    };
  }, []);
  return (
    <>
      {Object.entries(users).map(([id, user]) => (
        <motion.div
          key={id}
          className="fixed  flex flex-col justify-center items-center pointer-events-none z-50"
          animate={{
            left: `${user.x * window.innerWidth}px`,
            top: `${user.y * window.innerHeight}px`,
          }}
          transition={{
            stiffness: 300,
            damping: 25,
            mass: 0.5,
          }}
        >
          <motion.div
            className="border rounded-full w-3 h-3 "
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.5, 1],
              background: ["var(--bg)", "var(--mouse)", "var(--bg)"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              // type: "spring",
              stiffness: 200,
            }}
            style={{ transform: "translate(-50%,-50%)" }}
          ></motion.div>

          <div
            style={{ transform: "translate(50%,50%)" }}
            className="text-xs  text-(--text)  flex gap-3"
          >
            <p> x: {Math.round(user.x * window.innerWidth)}</p>
            <p>y: {Math.round(user.y * window.innerHeight)}</p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default MouseRender;
