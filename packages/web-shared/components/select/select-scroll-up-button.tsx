"use client";
import { ScrollUpButton } from "@radix-ui/react-select";
import { ChevronUp } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const SelectScrollUpButton = forwardRef<
  ElementRef<typeof ScrollUpButton>,
  ComponentPropsWithoutRef<typeof ScrollUpButton>
>(({ className, ...props }, ref) => (
  <ScrollUpButton
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    ref={ref}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </ScrollUpButton>
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
