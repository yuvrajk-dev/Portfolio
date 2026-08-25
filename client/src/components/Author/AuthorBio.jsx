import myImage from "../../assets/Avatar1.webp";

const AuthorBio = () => {
  return (
    <div className=" flex  justify-center flex-col md:flex-row  lg:flex-row p-5 gap-3  items-center  ">
      <div className=" w-50 h-50 ">
        <img src={myImage} alt="Yuvraj Kumar" />
      </div>
      <div className=" flex-1 max-w-[90ch] leading-snug text-sm text-(--text-muted) space-y-3">
        <h1 className="text-xl  text-center  md:text-left lg:text-left">
          SOFTWARE ENGINEER
        </h1>
        <p className="text-center text-base md:text-left lg:text-left ">
          I'm a Software Engineer who enjoys building products from the
          interface to the backend. I work primarily with JavaScript, React,
          Node.js, and modern web technologies, with hands-on experience
          building APIs, working with databases, implementing authentication,
          integrating AI services, and developing real-time features.
        </p>
      </div>
    </div>
  );
};

export default AuthorBio;
