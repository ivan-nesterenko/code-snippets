import { MutableRefObject, useCallback, useEffect } from "react";

export const useEventOutsideElement = <K extends keyof DocumentEventMap>(
  elementRef: MutableRefObject<Element | null>,
  event: K,
  callback: () => void,
) => {
  const handler = useCallback(
    (e: DocumentEventMap[K]) => {
      if (elementRef.current && elementRef.current.contains(e.target as Node)) return;
      callback();
    },
    [callback, elementRef],
  );

  useEffect(() => {
    document.addEventListener(event, handler);

    return () => {
      document.removeEventListener(event, handler);
    };
  }, [elementRef, event, callback, handler]);
};
