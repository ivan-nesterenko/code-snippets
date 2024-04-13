"use client";
import { FC, HTMLAttributes } from "react";

import { cn } from "../../utils";

export const DialogHeader: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";
