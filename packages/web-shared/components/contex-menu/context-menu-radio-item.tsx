"use client";
import { ItemIndicator, RadioItem } from "@radix-ui/react-context-menu";
import { Circle } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const ContextMenuRadioItem = forwardRef<
  ElementRef<typeof RadioItem>,
  ComponentPropsWithoutRef<typeof RadioItem>
>(({ children, className, ...props }, ref) => (
  <RadioItem
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
));
ContextMenuRadioItem.displayName = RadioItem.displayName;
