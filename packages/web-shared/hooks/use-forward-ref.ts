import { useRef, useImperativeHandle, type ForwardedRef } from "react";

export const useForwardRef = <T>(
  ref: ForwardedRef<T>,
  initialValue: T | null = null,
) => {
  const targetRef = useRef<T>(initialValue ?? null);

  useImperativeHandle(ref, () => targetRef.current as T, [targetRef]);
  return targetRef;
};
