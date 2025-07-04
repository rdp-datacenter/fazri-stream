"use client";

import React from "react";
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { MoonIcon } from "./moon";
import { SunIcon } from "./sun";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const ModeToggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { className?: string }
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      ref={ref}
      variant="ghost"
      type="button"
      size="icon"
      className={cn("px-2", className)}
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      {...props}
    >
      <SunIcon className="text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
});

ModeToggle.displayName = "ModeToggle";
