import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import scene1 from "./scenes/scene-1";
import scene2 from "./scenes/scene-2";
import scene3 from "./scenes/scene-3";
import scene4 from "./scenes/scene-4";
import scene5 from "./scenes/scene-5";
import initParamsValidationRules from "./initParamsValidationRules";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "1280px",
    height: "720px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Alegreya&family=Nunito:wght@700&display=swap",
    },
  ],
});

clip.addIncident(scene1, 0);
clip.addIncident(scene2, 9000);
clip.addIncident(scene3,15000);
clip.addIncident(scene4,22000);
clip.addIncident(scene5,27000);
