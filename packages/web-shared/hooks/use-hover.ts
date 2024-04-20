import { RefObject, useEffect, useState } from "react";

type HoverElementProps = {
  params?: {
    callback?: (state: boolean) => void;
  };
  ref: RefObject<Element>;
};

export const useHover = ({ params: { callback } = {}, ref }: HoverElementProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  useEffect(() => {
    if (isHovering && callback) callback(isHovering);

    const element = ref.current;
    if (!element) return;

    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);

    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
    };
  }, [callback, isHovering, ref]);

  return isHovering;
};
