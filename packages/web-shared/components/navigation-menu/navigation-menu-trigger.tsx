import { Trigger } from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-zinc-100/50 data-[state=open]:bg-zinc-100/50 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-[active]:bg-zinc-800/50 dark:data-[state=open]:bg-zinc-800/50",
);

export const NavigationMenuTrigger = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(
  ({ children, className, ...props }, ref) => (
    <Trigger className={cn(navigationMenuTriggerStyle(), "group", className)} ref={ref} {...props}>
      {children}
      <ChevronDown
        aria-hidden="true"
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      />
    </Trigger>
  ),
);
NavigationMenuTrigger.displayName = Trigger.displayName;
