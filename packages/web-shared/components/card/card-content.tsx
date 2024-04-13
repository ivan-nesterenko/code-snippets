import { HTMLAttributes, forwardRef } from "react";

import { cn } from "../../utils";

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div className={cn("p-6 pt-0", className)} ref={ref} {...props} />,
);
CardContent.displayName = "CardContent";
