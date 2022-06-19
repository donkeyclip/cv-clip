import { CSSEffect } from "@donkeyclip/motorcortex";
export const moveLeft = (left,selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        left,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
