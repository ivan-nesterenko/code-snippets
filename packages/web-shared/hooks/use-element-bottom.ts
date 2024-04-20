import { RefObject, useEffect, useState } from "react";

type ElementBottomProps = {
  params?: {
    callback?: (state: boolean) => void;
    pxBeforeElement?: number;
  };
  ref: RefObject<HTMLElement>;
};

export const useElementBottom = ({ params: { callback, pxBeforeElement = 0 } = {}, ref }: ElementBottomProps) => {
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    if (reachedEnd && callback) callback(reachedEnd);

    const handleScroll = () => {
      if (!ref.current) return;
      const { bottom } = ref.current.getBoundingClientRect();
      const isAtBottom = bottom <= window.innerHeight + pxBeforeElement;
      setReachedEnd(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback, pxBeforeElement, reachedEnd, ref]);
};
