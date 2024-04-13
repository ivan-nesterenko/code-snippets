"use client";
import { Title } from "@radix-ui/react-toast";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const ToastTitle = forwardRef<ElementRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(
  ({ className, ...props }, ref) => <Title className={cn("text-sm font-semibold", className)} ref={ref} {...props} />,
);
ToastTitle.displayName = Title.displayName;
