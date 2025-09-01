import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = (theme ?? resolvedTheme) === "dark";

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        aria-label="Toggle theme"
        className="rounded-full border-border/60 bg-background/80 backdrop-blur shadow-md hover:shadow-lg"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        title={isDark ? "Switch to light" : "Switch to dark"}
      >
        {isDark ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
