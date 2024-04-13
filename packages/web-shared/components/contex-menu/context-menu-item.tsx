"use client";
import { Item } from "@radix-ui/react-context-menu";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const ContextMenuItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Item
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuItem.displayName = Item.displayName;
