"use client";
import { Label } from "@radix-ui/react-context-menu";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const ContextMenuLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Label
    className={cn("px-2 py-1.5 text-sm font-semibold text-zinc-950 dark:text-zinc-50", inset && "pl-8", className)}
    ref={ref}
    {...props}
  />
));
ContextMenuLabel.displayName = Label.displayName;
