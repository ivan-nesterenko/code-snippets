"use client";
import { FC, HTMLAttributes } from "react";

import { cn } from "../../utils";

export const DrawerHeader: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";
