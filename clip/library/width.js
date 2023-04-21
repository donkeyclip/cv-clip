import { CSSEffect } from "@donkeyclip/motorcortex";
export const width = (
  width,
  selector,
  duration,
  delay = 0,
  easing = "linear",
  initialValues
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        width,
      },
      ...(initialValues && { initialValues: { width: initialValues } }),
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
