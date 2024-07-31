"use client";

import React from "react";
import { Button } from "./button";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

interface toggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: toggleProps) {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      className={className}
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      variant="ghost"
      size="icon"
    >
      <FaRegMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"></FaRegMoon>
      <FiSun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"></FiSun>
    </Button>
  );
}
