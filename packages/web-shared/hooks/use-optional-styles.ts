import { useCallback, useEffect, useRef } from "react";
import { useDebounce } from "./use-debounce";
import { twMerge } from "tailwind-merge";
import { timer } from "./utils";

export enum AnimationsVariant {
  SLIDE = "slide",
  SLIDE_RIGHT = "slide-right",
  SLIDE_TOP = "slide-top",
  FADE = "fade",
}

export const animations: Record<
  keyof typeof AnimationsVariant,
  (state: boolean) => string
> = {
  SLIDE: (isOpen: boolean) => (isOpen ? "animate-show" : "-translate-x-full"),
  SLIDE_RIGHT: (isOpen: boolean) =>
    isOpen ? "animate-showRight animate-fade" : "translate-x-1/2 opacity-0",
  SLIDE_TOP: (isOpen: boolean) =>
    isOpen ? "animate-showTop animate-fade" : "-translate-y-1/2 opacity-0",
  FADE: (isOpen: boolean) => (isOpen ? "animate-fade" : "opacity-0"),
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
    ms: 500,
  },
  [AnimationsTimingKeys.LONG]: {
    ms: 700,
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
  timing: keyof typeof AnimationsTimingKeys;
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
  const measureTime = timer();

  const elementStyleController = useCallback(
    (
      state: boolean,
      animationsSpeed = animationsTimings[AnimationsTimingKeys[timing]].ms,
    ) => {
      if (!ref?.current) return;

      ref.current.style.animationDuration = animationsSpeed + "ms";

      ref.current.style.transitionDuration = animationsSpeed + "ms";

      ref.current.className = twMerge(
        ref.current.className,
        animationStyle
          ? animations[animationStyle](state)
          : customAnimationStyle(state),
      );
    },
    [animationStyle, customAnimationStyle, timing],
  );

  useEffect(() => {
    elementStyleController(initialEnabled ?? true);
  }, [elementStyleController, initialEnabled]);

  const {
    debounceCallback: debounceOnEnableCallback,
  } = useDebounce({
    callback: () => {
      onEnable?.();
    },
    debounce: animationsTimings[AnimationsTimingKeys[timing]].ms,
  });

  const {
    debounceCallback: debounceOnDisableCallback,
  } = useDebounce({
    callback: () => {
      onDisable?.();
    },
    debounce: animationsTimings[AnimationsTimingKeys[timing]].ms,
  });

  const enableStyle = useCallback(() => {
    elementStyleController(true);

    if (!onEnable) return;

    debounceOnEnableCallback({});
  }, [debounceOnEnableCallback, elementStyleController, onEnable]);

  const disableStyle = useCallback(() => {
    measureTime((time) => {
      if (time < animationsTimings[AnimationsTimingKeys[timing]].ms) return;
      elementStyleController(false);

      if (!onDisable) return;

      debounceOnDisableCallback({});
    });
  }, [
    debounceOnDisableCallback,
    elementStyleController,
    measureTime,
    onDisable,
    timing,
  ]);

  return { enableStyle, disableStyle, ref };
};
