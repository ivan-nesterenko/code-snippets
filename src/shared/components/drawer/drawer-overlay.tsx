"use client";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "../../utils";

export const DrawerOverlay = forwardRef<
  ElementRef<typeof DrawerPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay className={cn("fixed inset-0 z-50 bg-black/80", className)} ref={ref} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;
