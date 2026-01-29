import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
      return;
    }

    // If no saved theme, use system setting
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const systemTheme = prefersDark ? "dark" : "light";
    setTheme(systemTheme);
    document.documentElement.classList.toggle("dark", systemTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return { theme, toggleTheme };
}
