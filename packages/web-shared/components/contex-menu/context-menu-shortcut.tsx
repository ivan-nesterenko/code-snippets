"use client";
import { HTMLAttributes } from "react";

import { cn } from "../../utils";

export const ContextMenuShortcut = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={cn("ml-auto text-xs tracking-widest text-zinc-500 dark:text-zinc-400", className)} {...props} />
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";
