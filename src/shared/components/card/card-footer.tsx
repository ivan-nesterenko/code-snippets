import { HTMLAttributes, forwardRef } from "react";

import { cn } from "../../utils";

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn("flex items-center p-6 pt-0", className)} ref={ref} {...props} />
));
CardFooter.displayName = "CardFooter";
