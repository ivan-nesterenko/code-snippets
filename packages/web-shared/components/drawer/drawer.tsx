"use client";

import { ComponentProps, FC } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

export const Drawer: FC<ComponentProps<typeof DrawerPrimitive.Root>> = ({ shouldScaleBackground = true, ...props }) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";
