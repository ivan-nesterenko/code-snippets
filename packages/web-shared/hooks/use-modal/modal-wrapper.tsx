import { type FC, type ReactNode, memo, useCallback } from "react";

import { twMerge } from "tailwind-merge";
import { useAnimate, type AnimationProps } from "../use-animate";

enum ModalWrapperPositionVariant {
  BOTTOM_CENTER = "justify-center items-end",
  BOTTOM_LEFT = "justify-start items-end",
  BOTTOM_RIGHT = "justify-end items-end",
  CENTER = "justify-center items-center",
  CENTER_LEFT = "justify-start items-center",
  CENTER_RIGHT = "justify-end items-center",
  NONE = "",
  TOP_CENTER = "justify-center items-start",
  TOP_LEFT = "justify-start items-start",
  TOP_RIGHT = "justify-end items-start",
}

enum ModalWrapperMode {
  BLUR = "backdrop-blur-sm",
  SHADING = "backdrop-brightness-50",
  NONE = "",
}

export type ModalVariantProps = {
  position?: keyof typeof ModalWrapperPositionVariant;
  mode?: keyof typeof ModalWrapperMode;
  onBgClick?: () => void;
  className?: string;
  animationProps?: AnimationProps;
};

export type ModalWrapperProps = {
  children: ReactNode;
} & ModalVariantProps;

export const ModalWrapper: FC<ModalWrapperProps> = memo(
  ({
    children,
    className,
    position = "TOP_LEFT",
    mode = "SHADING",
    onBgClick,
    animationProps,
  }) => {
    const { toggleOutAnimation, ref } = useAnimate(
      animationProps
        ? animationProps
        : {
            in: {
              timing: "LONG",
              defaultAnimation: "FADE_IN",
            },
            out: {
              timing: "LONG",
              defaultAnimation: "FADE_OUT",
            },
          },
    );

    const handleBgClick = useCallback(() => {
      onBgClick?.();
      toggleOutAnimation?.();
    }, [onBgClick, toggleOutAnimation]);

    return (
      <div
        className={twMerge(
          "absolute left-0 top-0 z-[999] flex h-screen w-screen overflow-hidden",
          ModalWrapperPositionVariant[position],
        )}
      >
        <div className={twMerge("relative z-[999] h-fit w-fit transition-all")}>
          {children}
        </div>
        <div
          ref={ref}
          className={twMerge(
            "absolute h-full w-full",
            ModalWrapperMode[mode],
            className,
          )}
          onClick={handleBgClick}
        />
      </div>
    );
  },
);
