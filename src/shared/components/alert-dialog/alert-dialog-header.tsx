"use client";
import * as React from "react";
import { HTMLAttributes } from "react";

import { cn } from "../../utils";

export const AlertDialogHeader: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";
