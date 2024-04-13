import { ChevronRight } from "lucide-react";
import { ComponentProps, FC } from "react";

import { cn } from "../../utils";
import { PaginationLink } from "./pagination-link";

export const PaginationNext: FC<ComponentProps<typeof PaginationLink>> = ({ className, ...props }) => (
  <PaginationLink aria-label="Go to next page" className={cn("gap-1 pr-2.5", className)} size="default" {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";
