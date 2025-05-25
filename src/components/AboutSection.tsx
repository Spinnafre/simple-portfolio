import { Briefcase, Code } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="mt-10 px-6 py-10 bg-secondary">
      <div className="container max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold">About me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20">
          {/* About me */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium">Passionate Web Developer</h2>

            <p>
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p>
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 gap-5">
            <div className="p-6 card-hover gradient-border">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-md bg-primary/20">
                  <Code className="size-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Web Development</h3>
                  <p>
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 card-hover gradient-border">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-md bg-primary/20">
                  <Briefcase className="size-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Project Management</h3>
                  <p>
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 card-hover gradient-border">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-md bg-primary/20">
                  <Briefcase className="size-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Project Management</h3>
                  <p>
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
