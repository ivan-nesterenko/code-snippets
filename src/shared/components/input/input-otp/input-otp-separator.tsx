"use client";
import { Dot } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const InputOTPSeparator = forwardRef<ElementRef<"div">, ComponentPropsWithoutRef<"div">>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";
