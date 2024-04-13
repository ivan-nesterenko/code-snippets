"use client";
import { Item } from "@radix-ui/react-toggle-group";
import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useContext } from "react";

import { cn } from "../../../utils";
import { toggleVariants } from "../toggle";
import { ToggleGroupContext } from "./toggle-group";

const ToggleGroupItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & VariantProps<typeof toggleVariants>
>(({ children, className, size, variant, ...props }, ref) => {
  const context = useContext(ToggleGroupContext);

  return (
    <Item
      className={cn(
        toggleVariants({
          size: context.size || size,
          variant: context.variant || variant,
        }),
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </Item>
  );
});
ToggleGroupItem.displayName = Item.displayName;
