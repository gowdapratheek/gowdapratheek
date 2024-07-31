import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      {" "}
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center p-8 rounded-xl w-[40vw]">
            <img
              src="/insta.jpg"
              className="hidden lg:block lg:h-[80vh] lg:w-[40vw] lg:mt-8 lg:rounded-3xl "
            />
          </div>
          <div className="flex flex-col justify-center text-white">
            <h1 className="text-5xl font-bold text-white mb-4">
              Hi There <span className="animate-wave">👋</span>,
            </h1>
            <h2 className="text-5xl font-bold text-white mb-4">
              I&apos;m{" "}
              <span className="text-blue-400">
                <ReactTyped
                  startWhenVisible
                  strings={["Pratheek Gowda"]}
                  typeSpeed={80}
                />
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home