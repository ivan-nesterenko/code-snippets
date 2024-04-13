"use client";
import { Root } from "@radix-ui/react-toggle-group";
import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, createContext, forwardRef } from "react";

import { cn } from "../../../utils";
import { toggleVariants } from "../toggle";

export const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toggleVariants>
>(({ children, className, size, variant, ...props }, ref) => (
  <Root className={cn("flex items-center justify-center gap-1", className)} ref={ref} {...props}>
    <ToggleGroupContext.Provider value={{ size, variant }}>{children}</ToggleGroupContext.Provider>
  </Root>
));
ToggleGroup.displayName = Root.displayName;
