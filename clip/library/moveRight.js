import { CSSEffect } from "@donkeyclip/motorcortex";
export const moveRight = (right,selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        right,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
