import { useCallback, useEffect, useMemo, useRef } from "react";
import { twMerge } from "tailwind-merge";

export enum AnimationsVariant {
  FADE_IN = "fade-in",
  FADE_OUT = "fade-out",
  SCALE_IN = "scale-in",
  SCALE_OUT = "scale-out",
  SLIDE_IN_DOWN = "slide-in-down",
  SLIDE_OUT_DOWN = "slide-out-down",
  SLIDE_IN_LEFT = "slide-in-left",
  SLIDE_OUT_LEFT = "slide-out-left",
  SLIDE_IN_RIGHT = "slide-in-right",
  SLIDE_OUT_RIGHT = "slide-out-right",
  SLIDE_IN_UP = "slide-in-up",
  SLIDE_OUT_UP = "slide-out-up",
}

export const animations: Record<keyof typeof AnimationsVariant, string> = {
  FADE_IN: "animate-fadeIn",
  FADE_OUT: "animate-fadeOut",
  SCALE_IN: "animate-scaleIn",
  SCALE_OUT: "animate-scaleOut",
  SLIDE_IN_DOWN: "animate-slideInDown",
  SLIDE_OUT_DOWN: "animate-slideOutDown",
  SLIDE_IN_LEFT: "animate-slideInLeft",
  SLIDE_OUT_LEFT: "animate-slideOutLeft",
  SLIDE_IN_RIGHT: "animate-slideInRight",
  SLIDE_OUT_RIGHT: "animate-slideOutRight",
  SLIDE_IN_UP: "animate-slideInUp",
  SLIDE_OUT_UP: "animate-slideOutUp",
};

export enum AnimationsTimingKeys {
  SHORT = "short",
  MEDIUM = "medium",
  LONG = "long",
}

export const animationsTimings: Record<
  keyof typeof AnimationsTimingKeys,
  number
> = {
  SHORT: 200,
  MEDIUM: 400,
  LONG: 600,
};

export type DefaultAnimationProps = {
  defaultAnimation: keyof typeof AnimationsVariant;
  className?: never;
};

export type CustomAnimationProps = {
  defaultAnimation?: never;
  className: string;
};

export type AnimationProps = {
  initialEnabled?: false;
  in: {
    onAnimationEnd?: () => void;
    onAnimationStart?: () => void;
    timing: keyof typeof AnimationsTimingKeys | number;
  } & (DefaultAnimationProps | CustomAnimationProps);
  out: {
    onAnimationEnd?: () => void;
    onAnimationStart?: () => void;
    timing: keyof typeof AnimationsTimingKeys | number;
  } & (DefaultAnimationProps | CustomAnimationProps);
  onToggleInAnimation?: () => void;
  onToggleOutAnimation?: () => void;
};

export const useAnimate = ({
  initialEnabled,
  in: {
    timing: inTiming,
    className: inClassName,
    defaultAnimation: inDefaultAnimation,
    onAnimationEnd: onInAnimationEnd,
    onAnimationStart: onInAnimationStart,
  },
  out: {
    timing: outTiming,
    className: outClassName,
    defaultAnimation: outDefaultAnimation,
    onAnimationEnd: onOutAnimationEnd,
    onAnimationStart: onOutAnimationStart,
  },
  onToggleInAnimation,
  onToggleOutAnimation,
}: AnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const refAnimationState = useRef<"IN" | "OUT">("IN");

  const animationsInSpeed = useMemo(
    () =>
      typeof inTiming === "number" ? inTiming : animationsTimings[inTiming],
    [inTiming],
  );
  const animationsOutSpeed = useMemo(
    () =>
      typeof outTiming === "number" ? outTiming : animationsTimings[outTiming],
    [outTiming],
  );

  const inAnimation = useMemo(
    () => (inDefaultAnimation ? animations[inDefaultAnimation] : inClassName),
    [inClassName, inDefaultAnimation],
  );

  const outAnimation = useMemo(
    () =>
      outDefaultAnimation ? animations[outDefaultAnimation] : outClassName,
    [outClassName, outDefaultAnimation],
  );

  const elementStyleController = useCallback(
    (state: boolean) => {
      state ? onToggleInAnimation?.() : onToggleOutAnimation?.();
      refAnimationState.current = state ? "IN" : "OUT";

      if (!ref.current) return;

      const element = ref.current;

      element.style.animationDuration =
        (state ? animationsInSpeed : animationsOutSpeed) + "ms";
      element.style.transitionDuration =
        (state ? animationsInSpeed : animationsOutSpeed) + "ms";

      element.style.transition = `ms`;

      element.className = twMerge(
        element.className,
        "transition-all",
        state ? inAnimation : outAnimation,
      );
    },
    [
      animationsInSpeed,
      animationsOutSpeed,
      inAnimation,
      onToggleInAnimation,
      onToggleOutAnimation,
      outAnimation,
    ],
  );

  const handleAnimationStart = useCallback(() => {
    const animationState = refAnimationState.current;
    if (animationState === "IN") return onInAnimationStart?.();
    return onOutAnimationStart?.();
  }, [onInAnimationStart, onOutAnimationStart]);

  const handleAnimationEnd = useCallback(() => {
    const animationState = refAnimationState.current;
    if (animationState === "IN") return onInAnimationEnd?.();
    if (ref?.current) ref.current.style.visibility = "hidden";
    return onOutAnimationEnd?.();
  }, [onInAnimationEnd, onOutAnimationEnd]);

  useEffect(() => {
    elementStyleController(initialEnabled ?? true);
    if (!ref.current) return;
    const element = ref.current;

    element.onanimationstart = handleAnimationStart;
    element.onanimationend = handleAnimationEnd;

    return () => {
      element.onanimationend = null;
      element.onanimationstart = null;
    };
  }, [
    elementStyleController,
    handleAnimationEnd,
    handleAnimationStart,
    initialEnabled,
    onInAnimationEnd,
    onInAnimationStart,
    onOutAnimationEnd,
    onOutAnimationStart,
  ]);

  return {
    toggleInAnimation: () => elementStyleController(true),
    toggleOutAnimation: () => elementStyleController(false),
    ref,
  };
};
