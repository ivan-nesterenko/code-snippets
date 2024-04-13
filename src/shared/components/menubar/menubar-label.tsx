"use client";
import { Label } from "@radix-ui/react-menubar";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const MenubarLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Label className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)} ref={ref} {...props} />
));
MenubarLabel.displayName = Label.displayName;
