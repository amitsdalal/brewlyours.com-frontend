
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from "lucide-react";
import { useTheme } from '@/components/ThemeProvider';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-coffee-accent/80 backdrop-blur-sm hover:bg-coffee-accent transition-all duration-300 shadow-lg"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-coffee-dark" />
      ) : (
        <Moon className="h-5 w-5 text-coffee-dark" />
      )}
    </button>
  );
};

export default ThemeToggle;
