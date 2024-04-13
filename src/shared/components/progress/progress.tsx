"use client";

import { Indicator, Root } from "@radix-ui/react-progress";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const Progress = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
  ({ className, value, ...props }, ref) => (
    <Root
      className={cn("relative h-4 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800", className)}
      ref={ref}
      {...props}
    >
      <Indicator
        className="h-full w-full flex-1 bg-zinc-900 transition-all dark:bg-zinc-50"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </Root>
  ),
);
Progress.displayName = Root.displayName;
