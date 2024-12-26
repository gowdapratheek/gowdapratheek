import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Vite", "TailwindCSS", "Shadcn", "JavaScript"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Firebase", "Postman"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySql"],
    },
    {
      title: "DevOps",
      skills: ["Docker", "Terraform", "CI/CD", "Scrum"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Windows", "Linux", "Git", "Github", "Hostinger", "Vercel"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Technical Skills
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 overflow-hidden group"
            >
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gray-700/50 text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-600/50 transition-all duration-300 cursor-default border border-gray-600/30 hover:border-gray-500"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
