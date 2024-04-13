import { MoreHorizontal } from "lucide-react";
import { ComponentProps, FC } from "react";

import { cn } from "../../utils";

export const PaginationEllipsis: FC<ComponentProps<"span">> = ({ className, ...props }) => (
  <span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";
