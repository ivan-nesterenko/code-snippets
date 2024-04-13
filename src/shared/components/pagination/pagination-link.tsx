import { ComponentProps } from "react";

import { cn } from "../../utils";
import { ButtonProps, buttonVariants } from "../button";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  ComponentProps<"a">;
export const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        size,
        variant: isActive ? "outline" : "ghost",
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";
