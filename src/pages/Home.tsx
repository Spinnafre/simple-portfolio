import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSections";
import { ThemeToggle } from "../components/ThemeToggle";

export function Home() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <ThemeToggle />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
      </main>

      <Footer />
    </div>
  );
}
