import { FC, HTMLAttributes } from "react";

import { cn } from "../../utils";

export const Skeleton: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return <div className={cn("animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-800", className)} {...props} />;
};
