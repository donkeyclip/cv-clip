import { CSSEffect } from "@donkeyclip/motorcortex";
export const moveTop = (
  top,
  selector,
  duration,
  delay = 0,
  easing = "linear",
  initialValues = undefined
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        top,
      },
      ...(initialValues && { initialValues: { top: initialValues } }),
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
