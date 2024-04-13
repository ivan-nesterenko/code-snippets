import { Header, Trigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import { cn } from "../../utils";

export const AccordionTrigger = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(
  ({ children, className, ...props }, ref) => (
    <Header className="flex">
      <Trigger
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </Trigger>
    </Header>
  ),
);
AccordionTrigger.displayName = Trigger.displayName;
