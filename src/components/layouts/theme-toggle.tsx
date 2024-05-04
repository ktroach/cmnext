"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/styles/icons"

export function ThemeToggle(props: any) {
  const { setTheme, theme } = useTheme()
  const containerClass: string = props && props?.className ? props.className : ''
  return (
    <div className={containerClass}>
      <Button
        title="Toggle Theme"
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Icons.sun
          className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          aria-hidden="true"
        />
        <Icons.moon
          className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          aria-hidden="true"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
