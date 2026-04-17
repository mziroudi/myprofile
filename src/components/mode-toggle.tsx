"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="size-10 !rounded-none text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.1rem] w-[1.1rem] dark:hidden" />
      <MoonIcon className="hidden h-[1.1rem] w-[1.1rem] dark:block" />
    </Button>
  );
}
