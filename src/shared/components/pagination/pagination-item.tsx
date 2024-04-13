import { ComponentProps, forwardRef } from "react";

import { cn } from "../../utils";

export const PaginationItem = forwardRef<HTMLLIElement, ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li className={cn("", className)} ref={ref} {...props} />
));
PaginationItem.displayName = "PaginationItem";
