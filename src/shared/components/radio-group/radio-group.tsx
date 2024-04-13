"use client";

import { Root } from "@radix-ui/react-radio-group";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const RadioGroup = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
  ({ className, ...props }, ref) => {
    return <Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
  },
);
RadioGroup.displayName = Root.displayName;
