"use client";
import { OTPInputContext } from "input-otp";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useContext } from "react";

import { cn } from "../../../utils";

export const InputOTPSlot = forwardRef<ElementRef<"div">, ComponentPropsWithoutRef<"div"> & { index: number }>(
  ({ className, index, ...props }, ref) => {
    const inputOTPContext = useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

    return (
      <div
        className={cn(
          "relative flex h-10 w-10 items-center justify-center border-y border-r border-zinc-200 text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md dark:border-zinc-800",
          isActive && "z-10 ring-2 ring-zinc-950 ring-offset-white dark:ring-zinc-300 dark:ring-offset-zinc-950",
          className,
        )}
        ref={ref}
        {...props}
      >
        {char}
        {hasFakeCaret && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="animate-caret-blink h-4 w-px bg-zinc-950 duration-1000 dark:bg-zinc-50" />
          </div>
        )}
      </div>
    );
  },
);
InputOTPSlot.displayName = "InputOTPSlot";
