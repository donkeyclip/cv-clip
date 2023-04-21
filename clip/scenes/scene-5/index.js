import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { width } from "../../library/width";
import { scale } from "../../library/scale";
import { moveLeft } from "../../library/moveLeft";
import { moveRight } from "../../library/moveRight";
import { moveTop } from "../../library/moveTop";
import { translateXY } from "../../library/translateXY";
import { barChart, progressBar } from "../../library/barChart";
import { opacity } from "../../library/opacity";

export default () => {
  const clip = new HTMLClip({
    html,
    css,
    selector: "#root5",
    containerParams: {
      width: "1280px",
      height: "720px",
    },
    initParams: {
      portfolio: "@initParams.portfolio",
      stylesheet: "@initParams.stylesheet",
    },
  });

  clip.addIncident(moveRight("0%", ".portfolio", 500, 0, "easeInOutQuint"), 0);

  clip.addIncident(scale(1, ".portfolio", 200, 0, "easeOutSine"), 1000);

  clip.addIncident(opacity(0, ".title", 600), 1500);
  clip.addIncident(
    scale(0.8, ".project", 1000, "@expression(index *5000)", "easeOutBounce"),
    1900
  );
  clip.addIncident(
    opacity(0, ".project", 500, "@expression(index*5000)"),
    6300
  );
  clip.addIncident(
    opacity(1, ".thanks", 200, "@expression(index *5000)"),
    7200
  );
  clip.addIncident(scale(0, ".thanks", 200, "@expression(index *5000)"), 10300);
  return clip;
};
