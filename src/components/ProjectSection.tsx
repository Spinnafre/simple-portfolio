import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MyCommerce",
    description:
      "A amazon website e-commerce clone with user authentication and payments",
    image: "/projects/project1.png",
    tags: ["React", "MongoDB", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectSection() {
  return (
    <section id="projects" className="relative bg-secondary py-20 px-4">
      <div className="container">
        <h1 className="font-bold text-3xl md:text-4xl">My projects</h1>

        <p className="text-center max-w-2xl mx-auto mt-4 mb-4">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-card rounded-lg shadow-sm overflow-hidden card-hover"
            >
              <div className=" h-40 overflow-hidden">
                <img
                  className="object-cover transition-transform duration-500 w-full h-full group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="p-6">
                <div className="flex gap-1 flex-wrap mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="font-medium text-xs border px-2 py-1 rounded-full bg-primary/80 text-primary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-medium mb-2">{project.title}</h3>

                <p className="text-sm mb-4">Description</p>

                <div className="flex justify-end mx-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/50 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="https://github.com/Spinnafre"
            target="_blank"
            className="cosmic-button flex items-center w-fit gap-4 mx-auto"
          >
            Check my github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
