import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex min-h-screen  justify-center items-center flex-col ">
        <main className="   items-center bg-[hsl(var(--bg1-color))] mt-5 rounded-2xl  flex flex-col w-[90vw]">
          <div className="mt-30   w-full  flex flex-col items-center justify-center">
            <p className=" font-bold">Frontend Developer</p>

            <p className="text-7xl font-bold">Yuvraj Kumar</p>
          </div>
          <div className="mt-3 flex justify-center items-center">
            <p className="  text-center max-w-[70ch] text-[hsl(var(--text-color))] leading-relaxed ">
              I build fast, scalable web applications using React and modern
              frontend technologies, with a strong focus on clean architecture
              and great user experience.
            </p>
          </div>
          <div className=" mb-30 mt-10 w-full flex gap-5 justify-center items-center ">
            <button className=" border-[hsl(var(--border-color))] transition ease-in duration-15s hover:shadow-none border-1 px-5 py-2 rounded-md shadow-lg  ">
              View Projects
            </button>
            <button className="   border-[hsl(var(--border-color))] transition ease-in duration-155  hover:shadow-none border-1 px-5 py-2 rounded-md shadow-lg ">
              Contact Me
            </button>
          </div>
        </main>
        <div className="   items-center bg-[hsl(var(--bg1-color))] mt-5 mb-5 rounded-2xl w-[90vw] h-1000"></div>

        <footer className="flex justify-center border-[hsl(var(--border-color))] border-1 items-center w-full   ">
          <section className="w-full flex my-2  justify-around items-center">
            <div className="">
              <p className="text-center text-sm   ">
                LAST UPDATED <span className=" ml-5"> 2026-03-03</span>
              </p>
            </div>
            <div className="">
              <p className="text-center text-sm ">
                &copy; 2026 Yuvraj Kumar Built with React & Tailwind
              </p>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
};

export default Home;
