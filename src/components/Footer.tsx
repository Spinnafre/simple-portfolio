import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-card py-10 px-4 border-t-2 border-border/50 flex justify-between items-center">
      <p className="font-medium">
        {" "}
        &#9863; {new Date().getFullYear()} Spinnafre
      </p>

      <a
        href="#hero"
        className="animate-bounce bg-primary/10 transition-colors duration-300 transform-translate-x-1/2 text-primary hover:bg-primary/50 rounded-full p-2"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
}
