import { CSSEffect } from "@donkeyclip/motorcortex";
export const moveLeft = (
  left,
  selector,
  duration,
  delay = 0,
  easing = "linear",
  initialValues = undefined
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        left,
      },
      ...(initialValues && { initialValues: { left: initialValues } }),
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
