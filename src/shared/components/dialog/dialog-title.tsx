"use client";
import { Title } from "@radix-ui/react-dialog";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const DialogTitle = forwardRef<ElementRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(
  ({ className, ...props }, ref) => (
    <Title className={cn("text-lg font-semibold leading-none tracking-tight", className)} ref={ref} {...props} />
  ),
);
DialogTitle.displayName = Title.displayName;
