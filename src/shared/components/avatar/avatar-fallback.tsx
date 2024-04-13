"use client";
import { Fallback } from "@radix-ui/react-avatar";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const AvatarFallback = forwardRef<ElementRef<typeof Fallback>, ComponentPropsWithoutRef<typeof Fallback>>(
  ({ className, ...props }, ref) => (
    <Fallback
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
AvatarFallback.displayName = Fallback.displayName;
