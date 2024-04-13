import { List } from "@radix-ui/react-navigation-menu";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const NavigationMenuList = forwardRef<ElementRef<typeof List>, ComponentPropsWithoutRef<typeof List>>(
  ({ className, ...props }, ref) => (
    <List
      className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
      ref={ref}
      {...props}
    />
  ),
);
NavigationMenuList.displayName = List.displayName;
