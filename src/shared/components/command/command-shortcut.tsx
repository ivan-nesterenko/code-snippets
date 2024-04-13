"use client";
import { FC, HTMLAttributes } from "react";

import { cn } from "../../utils";

export const CommandShortcut: FC<HTMLAttributes<HTMLSpanElement>> = ({ className, ...props }) => {
  return (
    <span className={cn("ml-auto text-xs tracking-widest text-zinc-500 dark:text-zinc-400", className)} {...props} />
  );
};
CommandShortcut.displayName = "CommandShortcut";
