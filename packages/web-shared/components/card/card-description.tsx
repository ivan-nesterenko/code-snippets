import { HTMLAttributes, forwardRef } from "react";

import { cn } from "../../utils";

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)} ref={ref} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";
