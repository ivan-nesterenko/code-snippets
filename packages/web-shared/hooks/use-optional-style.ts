import { useCallback, useEffect, useMemo, useRef } from "react";
import { useDebounce } from "./use-debounce";
import { twMerge } from "tailwind-merge";
import { timer } from "../utils";

export enum AnimationsVariant {
  SLIDE_LEFT = "slide-left",
  SLIDE_RIGHT = "slide-right",
  SLIDE_UP = "slide-up",
  SLIDE_DOWN = "slide-down",
  SCALE = "scale",
  FADE = "fade",
}

const animationConstructor =
  (showAnimation: string, hideAnimation: string) => (isOpen: boolean) =>
    isOpen ? showAnimation : hideAnimation;

export const animations: Record<
  keyof typeof AnimationsVariant,
  (state: boolean) => string
> = {
  SLIDE_LEFT: animationConstructor(
    "animate-slideInLeft",
    "animate-slideOutLeft",
  ),

  SLIDE_RIGHT: animationConstructor(
    "animate-slideInRight",
    "animate-slideOutRight",
  ),
  SLIDE_UP: animationConstructor("animate-slideInUp", "animate-slideOutUp"),
  SLIDE_DOWN: animationConstructor(
    "animate-slideInDown",
    "animate-slideOutDown",
  ),
  SCALE: animationConstructor("animate-scaleIn", "animate-scaleOut"),
  FADE: animationConstructor("animate-fadeIn", "animate-fadeOut"),
};

export enum AnimationsTimingKeys {
  SHORT = "short",
  MEDIUM = "medium",
  LONG = "long",
}
export const animationsTimings: Record<AnimationsTimingKeys, { ms: number }> = {
  [AnimationsTimingKeys.SHORT]: {
    ms: 200,
  },
  [AnimationsTimingKeys.MEDIUM]: {
    ms: 400,
  },
  [AnimationsTimingKeys.LONG]: {
    ms: 600,
  },
};

export type OptionalCustomStylePropsVariant = {
  customAnimationStyle: (isOpen: boolean) => string;
  animationStyle?: never;
};

export type OptionalDefaultStylePropsVariant = {
  animationStyle: keyof typeof AnimationsVariant;
  customAnimationStyle?: never;
};

export type OptionalStyleProps = {
  timing: keyof typeof AnimationsTimingKeys | number;
  initialEnabled?: boolean;
  onEnable?: () => void;
  onDisable?: () => void;
} & (OptionalCustomStylePropsVariant | OptionalDefaultStylePropsVariant);

export const useOptionalStyle = ({
  timing,
  initialEnabled,
  onEnable,
  onDisable,
  customAnimationStyle,
  animationStyle,
}: OptionalStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const refAnimationState = useRef(false);
  const measureTime = timer();
  const animationsSpeed = useMemo(
    () =>
      typeof timing === "number"
        ? timing
        : animationsTimings[AnimationsTimingKeys[timing]].ms,
    [timing],
  );

  const elementStyleController = useCallback(
    (state: boolean, customAnimationsSpeed = animationsSpeed) => {
      if (!ref?.current) return;

      ref.current.style.animationDuration = customAnimationsSpeed + 20 + "ms";

      ref.current.style.transitionDuration = customAnimationsSpeed + 20 + "ms";

      ref.current.className = twMerge(
        ref.current.className,
        animationStyle
          ? animations[animationStyle](state)
          : customAnimationStyle(state),
      );
    },
    [animationStyle, animationsSpeed, customAnimationStyle],
  );

  useEffect(() => {
    refAnimationState.current = initialEnabled ?? true;
    elementStyleController(initialEnabled ?? true);
  }, [elementStyleController, initialEnabled]);

  const { debounceCallback: debounceOnEnableCallback } = useDebounce({
    callback: () => {
      onEnable?.();
    },
    debounce: animationsSpeed,
  });

  const { debounceCallback: debounceOnDisableCallback } = useDebounce({
    callback: () => {
      onDisable?.();
    },
    debounce: animationsSpeed,
  });

  const enableStyle = useCallback(() => {
    if (refAnimationState.current) return (refAnimationState.current = false);
    refAnimationState.current = true;

    elementStyleController(true);

    if (!onEnable) return;

    debounceOnEnableCallback({});
  }, [debounceOnEnableCallback, elementStyleController, onEnable]);

  const disableStyle = useCallback(() => {
    if (!refAnimationState.current) return (refAnimationState.current = true);
    refAnimationState.current = false;
    measureTime((time) => {
      if (time < animationsSpeed) return;
      elementStyleController(false);

      if (!onDisable) return;
      debounceOnDisableCallback({});
    });
  }, [
    animationsSpeed,
    debounceOnDisableCallback,
    elementStyleController,
    measureTime,
    onDisable,
  ]);

  return { enableStyle, disableStyle, ref };
};
