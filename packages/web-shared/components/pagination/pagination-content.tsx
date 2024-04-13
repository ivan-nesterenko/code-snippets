import { ComponentProps, forwardRef } from "react";

import { cn } from "../../utils";

export const PaginationContent = forwardRef<HTMLUListElement, ComponentProps<"ul">>(({ className, ...props }, ref) => (
  <ul className={cn("flex flex-row items-center gap-1", className)} ref={ref} {...props} />
));
PaginationContent.displayName = "PaginationContent";
