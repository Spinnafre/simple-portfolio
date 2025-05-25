import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    console.log(theme);

    if (!theme) {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      return;
    }

    if (theme == "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function ToggleTheme() {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
      return;
    }

    document.documentElement.classList.add("dark");
    setIsDarkMode(true);
    localStorage.setItem("theme", "dark");
  }

  return (
    <button
      onClick={ToggleTheme}
      className="fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-blue-700" />
      )}
    </button>
  );
}
