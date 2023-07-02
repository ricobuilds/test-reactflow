import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amethyst-300 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-charkol text-onyx hover:bg-charkol/80",
        destructive:
          "bg-scarlet-500 text-onyx hover:bg-scarlet-700 active:bg-scarlet-800",
        outline:
          "border border-obsidian-300 dark:border-obsidian-800 hover:bg-obsidian-200/50 dark:hover:bg-obsidian-400/20",
        secondary:
          "bg-obsidian-200/50 hover:bg-obsidian-200/80",
        ghost: "hover:bg-obsidian-200/50 hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-charkol",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
