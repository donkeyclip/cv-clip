import { CSSEffect } from "@donkeyclip/motorcortex";
export const translateXY = (x,y,selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform:{
            translateX:x,
            translateY:y
        },
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
