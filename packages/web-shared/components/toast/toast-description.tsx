"use client";
import { Description } from "@radix-ui/react-toast";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const ToastDescription = forwardRef<
  ElementRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description className={cn("text-sm opacity-90", className)} ref={ref} {...props} />
));
ToastDescription.displayName = Description.displayName;
