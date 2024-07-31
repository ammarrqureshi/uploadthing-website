"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme, theme } = useTheme();

  return (
    <main className="">
      <div>Hello world</div>
      <Button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      >
        <p className="scale-100 dark:scale-0">Light</p>
        <p className="scale-0 dark:scale-100">Dark</p>
      </Button>
      <Button>Get Started</Button>
    </main>
  );
}
