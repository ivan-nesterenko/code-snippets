"use client";
import { Title } from "@radix-ui/react-dialog";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const SheetTitle = forwardRef<ElementRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(
  ({ className, ...props }, ref) => (
    <Title className={cn("text-lg font-semibold text-zinc-950 dark:text-zinc-50", className)} ref={ref} {...props} />
  ),
);
SheetTitle.displayName = Title.displayName;
