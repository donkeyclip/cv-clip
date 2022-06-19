import { CSSEffect } from "@donkeyclip/motorcortex";
export const moveBottom = (bottom,selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        bottom,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
