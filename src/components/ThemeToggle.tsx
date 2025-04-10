import React, { useEffect, useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Otherwise check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply theme when component mounts and when theme changes
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  const applyTheme = (dark: boolean) => {
    const root = window.document.documentElement;
    
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center space-x-2 bg-coffee-dark/60 backdrop-blur-sm p-2 rounded-full">
      <Sun className={`h-4 w-4 ${isDarkMode ? 'text-coffee-beige/60' : 'text-coffee-accent'}`} />
      <Switch 
        checked={isDarkMode} 
        onCheckedChange={toggleTheme} 
        className="data-[state=checked]:bg-coffee-accent data-[state=unchecked]:bg-coffee-beige/30"
      />
      <Moon className={`h-4 w-4 ${isDarkMode ? 'text-coffee-accent' : 'text-coffee-beige/60'}`} />
    </div>
  );
};

export default ThemeToggle;
