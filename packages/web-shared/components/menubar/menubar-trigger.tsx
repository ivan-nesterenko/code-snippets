"use client";
import { Trigger } from "@radix-ui/react-menubar";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const MenubarTrigger = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(
  ({ className, ...props }, ref) => (
    <Trigger
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[state=open]:bg-zinc-100 data-[state=open]:text-zinc-900 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-[state=open]:bg-zinc-800 dark:data-[state=open]:text-zinc-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
MenubarTrigger.displayName = Trigger.displayName;
