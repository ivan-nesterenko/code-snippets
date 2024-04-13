"use client";
import { Content } from "@radix-ui/react-tabs";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const TabsContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, ...props }, ref) => (
    <Content
      className={cn(
        "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
TabsContent.displayName = Content.displayName;
