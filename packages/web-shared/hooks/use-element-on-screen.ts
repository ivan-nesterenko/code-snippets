import { RefObject, useEffect, useState } from "react";

type ElementOnScreenProps = {
  params?: {
    callback?: (state: boolean) => void;
  };
  ref: RefObject<Element>;
};

export const useElementOnScreen = ({ params: { callback } = {}, ref }: ElementOnScreenProps) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

    observer.observe(ref.current);

    if (isIntersecting && callback) callback(isIntersecting);
    return () => {
      observer.disconnect();
    };
  }, [callback, isIntersecting, ref]);
};
