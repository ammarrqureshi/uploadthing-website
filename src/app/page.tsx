import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
export default function Home() {
  return (
    <main className="">
      <div>Hello world</div>
      <ThemeToggle />
      <Button>Get Started</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">LInk</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="secondary">Learn More</Button>
      <Button variant="destructive">Danger</Button>
    </main>
  );
}
