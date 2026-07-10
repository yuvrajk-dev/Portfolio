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
        <p className="text-center text-m md:text-left lg:text-left ">
          Frontend Developer with hands-on experience shipping production-grade
          web apps using React, Redux Toolkit, and Supabase. Skilled in
          integrating REST and AI APIs (OpenRouter, TMDB), implementing
          real-time features with Socket.IO, and delivering polished, accessible
          user interfaces. Currently expanding into TypeScript, Next.js, and
          backend development with Node.js and Express.
        </p>
      </div>
    </div>
  );
};

export default AuthorBio;
