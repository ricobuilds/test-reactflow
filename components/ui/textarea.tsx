import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex h-20 w-full rounded-md bg-obsidian-200/50 dark:bg-obsidian-400/20 px-3 py-2 text-sm placeholder:text-obsidian-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-amethyst-200 dark:focus-visible:ring-amethyst-800 focus-visible:ring-offset-2 focus-visible:ring-offset-onyx dark:focus-visible:ring-offset-charkol disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
