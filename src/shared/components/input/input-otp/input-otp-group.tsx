"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../../utils";

export const InputOTPGroup = forwardRef<ElementRef<"div">, ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => <div className={cn("flex items-center", className)} ref={ref} {...props} />,
);
InputOTPGroup.displayName = "InputOTPGroup";
