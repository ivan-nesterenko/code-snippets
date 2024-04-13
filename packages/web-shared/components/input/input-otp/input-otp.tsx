"use client";
import { OTPInput } from "input-otp";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../../utils";

export const InputOTP = forwardRef<ElementRef<typeof OTPInput>, ComponentPropsWithoutRef<typeof OTPInput>>(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      className={cn("disabled:cursor-not-allowed", className)}
      containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
      ref={ref}
      {...props}
    />
  ),
);
InputOTP.displayName = "InputOTP";
