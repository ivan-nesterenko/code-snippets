import { HTMLAttributes, forwardRef } from "react";

import { cn } from "../../utils";

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} ref={ref} {...props} />
));
CardHeader.displayName = "CardHeader";
