import myImage from "../../assets/Avatar1.png";

const AuthorBio = () => {
  return (
    <div className=" flex justify-center flex-col md:flex-row  lg:flex-row p-5 gap-3 pb-40 items-center  ">
      <div className=" w-50 h-50 ">
        <img src={myImage} alt="profile" />
      </div>
      <div className=" flex-1 max-w-[90ch] leading-snug text-xs text-(--text-muted) space-y-3">
        <h1 className="text-xl  text-center  md:text-left lg:text-left">
          Frontend DEVELOPER
        </h1>
        <p className="text-center  md:text-left lg:text-left ">
          I focus on building scalable web applications using React and modern
          frontend architecture. I enjoy working on clean, structured systems
          and turning complex ideas into simple, usable interfaces.
        </p>

        <p className="text-center  md:text-left lg:text-left ">
          I'm currently exploring frontend architecture, data flow, and system
          design, with a strong interest in building products that scale well
          over time.
        </p>

        <p className="text-center  md:text-left lg:text-left ">
          Alongside development, I previously served as Vice President of
          Operations at Stalwart Esports, where I developed strong skills in
          ownership, decision-making, and execution qualities that influence how
          I approach building and problem-solving today.
        </p>
      </div>
    </div>
  );
};

export default AuthorBio;
