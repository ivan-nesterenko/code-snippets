"use client";
import { Separator } from "@radix-ui/react-select";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const SelectSeparator = forwardRef<ElementRef<typeof Separator>, ComponentPropsWithoutRef<typeof Separator>>(
  ({ className, ...props }, ref) => (
    <Separator className={cn("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800", className)} ref={ref} {...props} />
  ),
);
SelectSeparator.displayName = Separator.displayName;
