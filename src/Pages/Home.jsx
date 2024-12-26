import { ReactTyped } from "react-typed";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Newsletter.jsx";

function Home() {
  return (
    <>
      <div className="min-h-[80vh] flex items-center justify-center p-4 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-7xl">
          <div className="flex items-center justify-center md:p-8 rounded-xl">
            <img
              src="/insta.jpg"
              alt="Profile"
              className="rounded-full w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] 
                lg:h-[500px] lg:w-[500px] lg:rounded-3xl object-cover"
            />
          </div>
          <div className="flex flex-col justify-center text-white text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Hi There <span className="animate-wave inline-block">👋</span>,
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 chakra">
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                <ReactTyped
                  startWhenVisible
                  strings={["Pratheek Gowda"]}
                  typeSpeed={80}
                />
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-xl font-normal poppins">
              MERN Developer | Devops | Freelancer
            </p>
            <div className="flex mt-8 items-center justify-center md:hidden">
              {/* Mouse */}
              <div className="relative w-[35px] h-[60px] border-[2px] border-gray-400 rounded-[60px]">
                <div className="absolute w-[10px] h-[10px] bg-gray-400 rounded-full bottom-[10px] left-1/2 transform -translate-x-1/2 animate-wheel"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
