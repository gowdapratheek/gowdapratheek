function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "vite", "TailwindCSS", "Shadcn", "JavaScript"],
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
      title: "Devops",
      skills: ["Docker", "Terraform", "CI/CD", "Scrum"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Windows", "Linux", "Git", "Github", "Hostinger", "Vercel"],
    },
  ];

  return (
    <div className="pt-[10vh] px-5 text-gray-100 ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className=" rounded-lg border border-gray-700 shadow-md p-6 space-y-4 hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-white">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center rounded-full px-4 py-1.5 bg-gray-700 hover:bg-gray-600 text-sm md:text-base text-gray-200 font-medium transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
