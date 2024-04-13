"use client";
import { Indicator, Item } from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const RadioGroupItem = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>(
  ({ className, ...props }, ref) => {
    return (
      <Item
        className={cn(
          "aspect-square h-4 w-4 rounded-full border border-zinc-200 border-zinc-900 text-zinc-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",
          className,
        )}
        ref={ref}
        {...props}
      >
        <Indicator className="flex items-center justify-center">
          <Circle className="h-2.5 w-2.5 fill-current text-current" />
        </Indicator>
      </Item>
    );
  },
);
RadioGroupItem.displayName = Item.displayName;
