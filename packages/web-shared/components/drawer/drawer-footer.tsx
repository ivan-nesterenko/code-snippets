"use client";
import { FC, HTMLAttributes } from "react";

import { cn } from "../../utils";

export const DrawerFooter: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";
