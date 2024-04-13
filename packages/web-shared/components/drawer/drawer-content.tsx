"use client";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "../../utils";
import { DrawerOverlay } from "./drawer-overlay";
import { DrawerPortal } from "./drawer-portal";

export const DrawerContent = forwardRef<
  ElementRef<typeof DrawerPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950",
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-zinc-100 dark:bg-zinc-800" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";
