"use client";
import { Cancel } from "@radix-ui/react-alert-dialog";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";
import { buttonVariants } from "../button";

export const AlertDialogCancel = forwardRef<ElementRef<typeof Cancel>, ComponentPropsWithoutRef<typeof Cancel>>(
  ({ className, ...props }, ref) => (
    <Cancel className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)} ref={ref} {...props} />
  ),
);
AlertDialogCancel.displayName = Cancel.displayName;
