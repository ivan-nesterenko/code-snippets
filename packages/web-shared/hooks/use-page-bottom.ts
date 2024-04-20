import { useEffect, useState } from "react";

type PageBottomProps = {
  callback?: (state: boolean) => void;
  pxBeforeEnd?: number;
};

export const usePageBottom = ({ callback, pxBeforeEnd = 10 }: PageBottomProps) => {
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    if (reachedBottom && callback) callback(reachedBottom);

    const handleScroll = () => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      const reachingBottom = offsetHeight - (innerHeight + scrollTop) <= pxBeforeEnd;

      setReachedBottom(reachingBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback, pxBeforeEnd, reachedBottom]);

  return reachedBottom;
};
