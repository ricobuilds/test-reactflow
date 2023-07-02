import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-obsidian-800 placeholder-shown:border-obsidian-300 bg-transparent py-2 px-3 text-sm placeholder:text-obsidian-600 focus:outline-none focus:ring-2 focus:ring-obsidian-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-obsidian-700 dark:text-obsidian-50 dark:focus:ring-obsidian-400 dark:focus:ring-offset-obsidian-900",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
