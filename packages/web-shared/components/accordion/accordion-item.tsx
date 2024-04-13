import { Item } from "@radix-ui/react-accordion";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const AccordionItem = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>(
  ({ className, ...props }, ref) => <Item className={cn("border-b", className)} ref={ref} {...props} />,
);
AccordionItem.displayName = "AccordionItem";
