import { Content } from "@radix-ui/react-accordion";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const AccordionContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ children, className, ...props }, ref) => (
    <Content
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      ref={ref}
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </Content>
  ),
);

AccordionContent.displayName = Content.displayName;
