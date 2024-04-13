"use client";
import { Label } from "@radix-ui/react-select";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const SelectLabel = forwardRef<ElementRef<typeof Label>, ComponentPropsWithoutRef<typeof Label>>(
  ({ className, ...props }, ref) => (
    <Label className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} ref={ref} {...props} />
  ),
);
SelectLabel.displayName = Label.displayName;
