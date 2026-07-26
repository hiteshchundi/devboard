import { Moon, Sun } from "lucide-react";

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={onToggle}
      className="rounded-lg border border-gray-300 bg-white p-2 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default ThemeToggle;
