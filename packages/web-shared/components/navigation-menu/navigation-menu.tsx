import { Root } from "@radix-ui/react-navigation-menu";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";
import { NavigationMenuViewport } from "./navigation-menu-viewport";

export const NavigationMenu = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
  ({ children, className, ...props }, ref) => (
    <Root
      className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
      ref={ref}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </Root>
  ),
);
NavigationMenu.displayName = Root.displayName;
