import { useState } from "react";

type Skills = {
  name: string;
  category: string;
};

const skills: Array<Skills> = [
  { name: "HTML/CSS", category: "frontend" },
  { name: "Javascript", category: "frontend" },
  { name: "Typescript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Vue", category: "frontend" },

  { name: "Go", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Nest.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "RabbitMQ", category: "backend" },
];

const categories = ["frontend", "backend"];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative bg-secondary py-15 px-4 ">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold md:text-4xl text-center">
          My Skills
        </h1>

        <div className="flex flex-wrap justify-center gap-1 mb-10 mt-10 ">
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 transition-colors duration-500 capitalize text-primary rounded-t-lg text-md ${
                activeCategory === category
                  ? "border-b-2 border-primary font-bold"
                  : " font-medium  text-primary/50 border-b-2 border-primary/20  hover:border-primary/70 "
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {filteredSkills.map((skill, i) => (
            <div
              key={i}
              className="inline-flex items-center rounded-md bg-primary/20 border-1 border-primary/50 px-2 py-2 text-xs font-medium "
            >
              <h3 className="text-xs font-medium text-primary">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
