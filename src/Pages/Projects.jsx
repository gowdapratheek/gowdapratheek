import { HiCode, HiExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "Alumnia",
    description:
      "Community of students, alumni members to share resources, and build connections.",
    demoPhoto: "alumni.png",
    demoLink: "https://alumnia.vercel.app/",
    codeLink: "https://github.com/gowdapratheek/Alumnia",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Vercel"],
  },
  {
    title: "Druthi Construction",
    description:
      "Druthi Construction specializes in crafting high-quality residential spaces made for the client.",
    demoPhoto: "DC.png",
    demoLink: "https://druthiconstruction.com/",
    codeLink: "https://github.com/gowdapratheek/druthi-construction",
    technologies: ["React", "Tailwind CSS", "Blurhash"],
  },
  {
    title: "https://theitdistrict.com/",
    description:
      "Team of highly skilled professionals dedicated to providing innovative and reliable technology solutions to businesses of all sizes.",
    demoPhoto: "/itdistrict",
    demoLink: "https://theitdistrict.com/",
    codeLink: "https://github.com/gowdapratheek/itDistrict",
    technologies: ["React", "Tailwind CSS"],
  },
];

// function getScreenshotURL(url) {
//   return `https://api.screenshotone.com/take?url=${encodeURIComponent(
//     url
//   )}&access_key=${import.meta.env.VITE_API_KEY}`;
// }

function Projects() {
  return (
    <div className="pt-[10vh] px-5 text-gray-100 ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={project.demoPhoto}
              alt={project.title}
              className="w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 flex flex-col justify-end">
              <div className="p-4 bg-gradient-to-t from-black via-black/70 to-transparent">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-90 transition-opacity duration-300">
              <div className="p-4 space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center rounded-md text-gray-300 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent border border-gray-500 hover:bg-secondary/80 px-2 py-1 text-xs"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col space-y-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm text-white"
                  >
                    <HiExternalLink className="text-lg" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-x-2 border border-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm text-white"
                  >
                    <HiCode className="text-lg" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
