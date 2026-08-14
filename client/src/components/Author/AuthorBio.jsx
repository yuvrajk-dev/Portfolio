import myImage from "../../assets/Avatar1.webp";

const AuthorBio = () => {
  return (
    <div className=" flex  justify-center flex-col md:flex-row  lg:flex-row p-5 gap-3  items-center  ">
      <div className=" w-50 h-50 ">
        <img src={myImage} alt="Yuvraj Kumar" />
      </div>
      <div className=" flex-1 max-w-[90ch] leading-snug text-sm text-(--text-muted) space-y-3">
        <h1 className="text-xl  text-center  md:text-left lg:text-left">
          Frontend DEVELOPER
        </h1>
        <p className="text-center text-base md:text-left lg:text-left ">
          Frontend Developer specializing in React and JavaScript with
          experience building responsive, scalable web applications using React,
          React Flow, Zustand, Redux Toolkit, Supabase, and REST APIs.
          Passionate about creating intuitive user interfaces and integrating
          AI-powered features.
        </p>
      </div>
    </div>
  );
};

export default AuthorBio;
