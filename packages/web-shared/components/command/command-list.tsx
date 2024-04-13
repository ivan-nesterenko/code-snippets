"use client";
import { Command as CommandPrimitive } from "cmdk";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const CommandList = forwardRef<
  ElementRef<typeof CommandPrimitive.List>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    ref={ref}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;
