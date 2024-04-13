"use client";
import { Root } from "@radix-ui/react-menubar";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const Menubar = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
  ({ className, ...props }, ref) => (
    <Root
      className={cn(
        "flex h-10 items-center space-x-1 rounded-md border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-950",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Menubar.displayName = Root.displayName;
