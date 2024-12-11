import { ReactTyped } from "react-typed";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";

function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex items-center justify-center md:p-8 rounded-xl w-[40vw]">
            <img
              src="/insta.jpg"
              className="rounded-full lg:h-[80vh] lg:w-[40vw] lg:mt-8 lg:rounded-3xl mb-4"
            />
          </div>
          <div className="flex flex-col justify-center text-white">
            <h1 className="text-5xl font-bold text-white mb-4">
              Hi There <span className="animate-wave">👋</span>,
            </h1>
            <h2 className="text-5xl font-bold text-white mb-4 chakra">
              I&apos;m{" "}
              <span className="text-blue-400">
                <ReactTyped
                  startWhenVisible
                  strings={["Pratheek Gowda"]}
                  typeSpeed={80}
                />
              </span>
            </h2>
            <p className="text-xl md:text-xl font-normal poppins">
              MERN Developer | Devops | Freelancer
            </p>
            <div className="flex mt-8 items-center justify-center md:hidden">
              {/* Mouse */}
              <div className="relative w-[40px] h-[70px] border-[3px] border-gray-400 rounded-[60px]">
                <div className="absolute w-[12px] h-[12px] bg-gray-400 rounded-full bottom-[10px] left-1/2 transform -translate-x-1/2 animate-wheel"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Projects />
    </>
  );
}

export default Home;
