import { Indicator } from "@radix-ui/react-navigation-menu";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const NavigationMenuIndicator = forwardRef<
  ElementRef<typeof Indicator>,
  ComponentPropsWithoutRef<typeof Indicator>
>(({ className, ...props }, ref) => (
  <Indicator
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    ref={ref}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-zinc-200 shadow-md dark:bg-zinc-800" />
  </Indicator>
));
NavigationMenuIndicator.displayName = Indicator.displayName;
