import { motion } from "motion/react";

const Cards = () => {
  return (
    <div className=" w-full   pb-200 flex flex-col gap-10 items-center">
      <div className="w-[80%] rounded-2xl h-80 z-1 bg-(--bg) sticky top-20  "></div>

      <div className="w-[80%] rounded-2xl h-80 z-2 bg-(--bg) sticky top-20 "></div>

      <div className="w-[80%] rounded-2xl h-80 z-3 bg-(--bg) sticky top-20"></div>
    </div>
  );
};

export default Cards;
