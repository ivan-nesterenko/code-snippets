"use client";
import { Description } from "@radix-ui/react-dialog";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const DialogDescription = forwardRef<
  ElementRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)} ref={ref} {...props} />
));
DialogDescription.displayName = Description.displayName;
