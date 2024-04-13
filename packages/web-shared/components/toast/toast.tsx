"use client";
import { Root } from "@radix-ui/react-toast";
import { type VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-zinc-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-zinc-800",
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        default: "border bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50",
        destructive:
          "destructive group border-red-500 bg-red-500 text-zinc-50 dark:border-red-900 dark:bg-red-900 dark:text-zinc-50",
      },
    },
  },
);

export type ToastProps = ComponentPropsWithoutRef<typeof Toast>;

export const Toast = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <Root className={cn(toastVariants({ variant }), className)} ref={ref} {...props} />;
});
Toast.displayName = Root.displayName;
