"use client";
import { Item, ItemIndicator, ItemText } from "@radix-ui/react-select";
import { Check } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const SelectItem = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>(
  ({ children, className, ...props }, ref) => (
    <Item
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ItemIndicator>
          <Check className="h-4 w-4" />
        </ItemIndicator>
      </span>

      <ItemText>{children}</ItemText>
    </Item>
  ),
);
SelectItem.displayName = Item.displayName;
