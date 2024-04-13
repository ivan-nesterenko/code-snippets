"use client";
import { Command as CommandPrimitive } from "cmdk";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const CommandGroup = forwardRef<
  ElementRef<typeof CommandPrimitive.Group>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    className={cn(
      "overflow-hidden p-1 text-zinc-950 dark:text-zinc-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-zinc-500 dark:[&_[cmdk-group-heading]]:text-zinc-400",
      className,
    )}
    ref={ref}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;
