import { type FC, type ReactNode, memo, useCallback } from "react";

import { twMerge } from "tailwind-merge";
import {
  type OptionalStyleProps,
  useOptionalStyle,
  type OptionalCustomStylePropsVariant,
  type OptionalDefaultStylePropsVariant,
} from "../use-optional-style";

enum ModalWrapperPositionVariant {
  CENTRED = "justify-center items-center",
  NONE = "",
}

enum ModalWrapperMode {
  BLUR = "backdrop-blur-sm",
  SHADING = "backdrop-brightness-50",
  NONE = "",
}

type BgAnimationProps = (
  | OptionalCustomStylePropsVariant
  | OptionalDefaultStylePropsVariant
) &
  Except<OptionalStyleProps, "initialEnabled">;

export type ModalVariantProps = {
  position?: keyof typeof ModalWrapperPositionVariant;
  mode?: keyof typeof ModalWrapperMode;
  onBgClick?: () => void;
  className?: string;
  autoCloseOnBgClick?: boolean;
  bgAnimationProps?: BgAnimationProps;
};

export type ModalWrapperProps = {
  children: ReactNode;
} & ModalVariantProps;

export const ModalWrapper: FC<ModalWrapperProps> = memo(
  ({
    children,
    className,
    position = "CENTRED",
    mode = "SHADING",
    onBgClick,
    bgAnimationProps = {
      animationStyle: "FADE" as const,
      timing: "MEDIUM" as const,
    },
    autoCloseOnBgClick = true,
  }) => {
   const { disableStyle: disableWrapperStyle, ref } = useOptionalStyle({
      ...bgAnimationProps,
      onDisable: autoCloseOnBgClick ? onBgClick : bgAnimationProps.onDisable,
    });

    const handleBgClick = useCallback(
      () => (autoCloseOnBgClick ? disableWrapperStyle() : onBgClick?.()),
      [autoCloseOnBgClick, disableWrapperStyle, onBgClick],
    );

    return (
      <div
        className={twMerge(
          "absolute left-0 top-0 z-[999] flex h-screen w-screen overflow-hidden",
        )}
      >
        <div
          className={twMerge(
            "relative z-[999] h-fit w-fit transition-all",
            ModalWrapperPositionVariant[position],
          )}
        >
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

