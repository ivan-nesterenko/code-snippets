import { ChevronLeft } from "lucide-react";
import { ComponentProps, FC } from "react";

import { cn } from "../../utils";
import { PaginationLink } from "./pagination-link";

export const PaginationPrevious: FC<ComponentProps<typeof PaginationLink>> = ({ className, ...props }) => (
  <PaginationLink aria-label="Go to previous page" className={cn("gap-1 pl-2.5", className)} size="default" {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";
