export default function Projects() {
  // A simple hardcoded array of project details to map through
  const projectList = [
    { id: 1, title: "Savanna Grill Website", desc: "A responsive multi-page web layout created for a local restaurant concept.", tech: "HTML, CSS, JavaScript" },
    { id: 2, title: "Tasker Application MVP", desc: "A service connection structural prototype designed to track task assignments.", tech: "Python, Backend Logic" },
    { id: 3, title: "Personal Portfolio Version 1.0", desc: "A customized frontend landing profile showing integrated skills progress bars.", tech: "React, Tailwind CSS" }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">My Portfolio Projects</h1>
      
      {/* Grid wrapper holding project display cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
            </div>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-mono px-3 py-1 rounded-full self-start">
              {project.tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}