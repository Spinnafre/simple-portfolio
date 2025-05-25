import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-2"
    >
      <div className="container text-center mx-auto z-10">
        <div className="space-y-8">
          <h1 className="font-bold text-4xl md:text-6xl tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1">Hi, I'm </span>
            <span className="opacity-0 text-primary animate-fade-in-delay-2">
              Davi Silva
            </span>
          </h1>

          <p className="text-lg md:text-xl opacity-0 animate-fade-in-delay-3 mx-auto">
            I create amazing web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="pt-5 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View my work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-full/2 flex flex-col items-center animate-bounce transform -translate-x-1/2">
        <span className="text-sm mb-1">Scroll</span>
        <ArrowDown className="size-6 text-primary" />
      </div>
    </section>
  );
}
