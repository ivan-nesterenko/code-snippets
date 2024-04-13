"use client";
import { Close, Content } from "@radix-ui/react-dialog";
import { type VariantProps, cva } from "class-variance-authority";
import { X } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";
import { SheetOverlay } from "./sheet-overlay";
import { SheetPortal } from "./sheet-portal";

export const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-zinc-950",
  {
    defaultVariants: {
      side: "right",
    },
    variants: {
      side: {
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      },
    },
  },
);
interface SheetContentProps extends ComponentPropsWithoutRef<typeof Content>, VariantProps<typeof sheetVariants> {}

export const SheetContent = forwardRef<ElementRef<typeof Content>, SheetContentProps>(
  ({ children, className, side = "right", ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <Content className={cn(sheetVariants({ side }), className)} ref={ref} {...props}>
        {children}
        <Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:data-[state=open]:bg-zinc-800">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Close>
      </Content>
    </SheetPortal>
  ),
);
SheetContent.displayName = Content.displayName;
