import myImage from "../../assets/Avatar1.webp";

const AuthorBio = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-5 md:flex-row">
      <div className="h-50 w-50">
        <img src={myImage} alt="Yuvraj Kumar" />
      </div>

      <div className="max-w-[90ch] flex-1 space-y-3 text-center text-sm leading-snug text-(--text-muted) md:text-left">
        <h1 className="text-xl text-(--text)">SOFTWARE ENGINEER</h1>

        <p className="text-base">
          Software Engineer who builds from interface to backend. JavaScript,
          React, Node.js. Shipped across 4 production projects.
        </p>
        <div className="mt-6 flex justify-center gap-4 md:justify-start">
          <a
            href="/contact"
            className="w-36 rounded-xl bg-(--text) px-6 py-3 text-center font-medium text-(--bg-light) transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-(--shadow-l)"
          >
            Get in Touch
          </a>

          <a
            href="/Yuvraj_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-36 rounded-xl border border-black/10 bg-(--bg-light) px-6 py-3 text-center font-medium text-(--text) transition-all duration-300 hover:-translate-y-1 hover:bg-(--bg) hover:shadow-(--shadow-m)"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
