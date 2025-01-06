import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg 
        hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <Moon size={24} className="text-gray-800 dark:text-gray-200" />
      ) : (
        <Sun size={24} className="text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
}