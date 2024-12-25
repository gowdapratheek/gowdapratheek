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
    title: "TheitDistrict",
    description:
      "Team of highly skilled professionals dedicated to providing innovative and reliable technology solutions to businesses of all sizes.",
    demoPhoto: "/itdistrict.png",
    demoLink: "https://theitdistrict.com/",
    codeLink: "https://github.com/gowdapratheek/itDistrict",
    technologies: ["React", "Tailwind CSS"],
  },
];

function Projects() {
  return (
    <div className="pt-[10vh] px-5 text-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/90 shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative  overflow-hidden">
                <img
                  src={project.demoPhoto}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="p-4 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center rounded-full text-gray-300 font-medium border border-gray-700 px-3 py-1 text-xs backdrop-blur-sm hover:bg-gray-700/50 transition-colors"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col space-y-3">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 py-2 rounded-md text-sm text-white transition-all duration-300"
                    >
                      <HiExternalLink className="text-lg" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-x-2 border border-gray-600 hover:border-blue-500 hover:text-blue-400 px-4 py-2 rounded-md text-sm text-white transition-all duration-300"
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
    </div>
  );
}

export default Projects;
