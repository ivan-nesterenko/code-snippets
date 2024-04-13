import { ComponentProps } from "react";

import { cn } from "../../utils";

export const Pagination = ({ className, ...props }: ComponentProps<"nav">) => (
  <nav
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    role="navigation"
    {...props}
  />
);
Pagination.displayName = "Pagination";
