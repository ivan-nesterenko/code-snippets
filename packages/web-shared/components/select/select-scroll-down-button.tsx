"use client";
import { ScrollDownButton } from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const SelectScrollDownButton = forwardRef<
  ElementRef<typeof ScrollDownButton>,
  ComponentPropsWithoutRef<typeof ScrollDownButton>
>(({ className, ...props }, ref) => (
  <ScrollDownButton
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    ref={ref}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </ScrollDownButton>
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
