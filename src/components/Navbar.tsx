import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY >= 32 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-400 ${
        isScrolled
          ? " py-3  backdrop-blur-md shadow-xs"
          : "py-5 backdrop-blur-none"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Spinnafre</span>
          </span>
        </a>

        {/* Desktop Navigation */}

        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/70 hover:text-primary transition-colors duration-500"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}

        <button
          className="md:hidden p-2 text-foreground/90 z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`md:hidden fixed insert-0 bg-background/70 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col text-xl space-y-5">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/70 hover:text-primary transition-colors duration-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
