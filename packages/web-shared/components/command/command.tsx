"use client";

import { Command as CommandPrimitive } from "cmdk";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const Command = forwardRef<
  ElementRef<typeof CommandPrimitive>,
  ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;
