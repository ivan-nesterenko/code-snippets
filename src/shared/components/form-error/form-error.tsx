import { FC } from "react";

import { cn } from "../../utils";

export type FormErrorType = false | null | string;

export type FormErrorProps = {
  className?: string;
  errorText?: FormErrorType;
};

export const FormError: FC<FormErrorProps> = ({ className, errorText }) => (
  <p className={cn("text-red-1000 text-regular-caption", className)}>{errorText || " "}</p>
);
