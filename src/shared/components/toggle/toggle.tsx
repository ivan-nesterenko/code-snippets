"use client";

import { Root } from "@radix-ui/react-toggle";
import { type VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-zinc-100 hover:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-zinc-100 data-[state=on]:text-zinc-900 dark:ring-offset-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-400 dark:focus-visible:ring-zinc-300 dark:data-[state=on]:bg-zinc-800 dark:data-[state=on]:text-zinc-50",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-10 px-3",
        lg: "h-11 px-5",
        sm: "h-9 px-2.5",
      },
      variant: {
        default: "bg-transparent",
        outline:
          "border border-zinc-200 bg-transparent hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
      },
    },
  },
);

export const Toggle = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toggleVariants>
>(({ className, size, variant, ...props }, ref) => (
  <Root className={cn(toggleVariants({ className, size, variant }))} ref={ref} {...props} />
));

Toggle.displayName = Root.displayName;
