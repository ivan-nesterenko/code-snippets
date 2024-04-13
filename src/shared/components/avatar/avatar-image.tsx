"use client";
import { Image } from "@radix-ui/react-avatar";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const AvatarImage = forwardRef<ElementRef<typeof Image>, ComponentPropsWithoutRef<typeof Image>>(
  ({ className, ...props }, ref) => (
    <Image className={cn("aspect-square h-full w-full", className)} ref={ref} {...props} />
  ),
);
AvatarImage.displayName = Image.displayName;
