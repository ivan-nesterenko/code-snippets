import { HTMLAttributes, forwardRef } from "react";

import { cn } from "../../utils";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Card.displayName = "Card";
