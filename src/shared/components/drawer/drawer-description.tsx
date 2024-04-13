"use client";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "../../utils";

export const DrawerDescription = forwardRef<
  ElementRef<typeof DrawerPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)}
    ref={ref}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
