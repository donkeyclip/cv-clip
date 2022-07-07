import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { width } from "../../library/width";
import { scale } from "../../library/scale";
import { moveLeft } from "../../library/moveLeft";
import { moveRight } from "../../library/moveRight";
import { moveTop } from "../../library/moveTop";
import { translateXY } from "../../library/translateXY";
import { barChart ,progressBar} from "../../library/barChart";
import initParams from "../../initParams";

const clip = new HTMLClip({
  html,
  css,
  selector: "#root3",
  containerParams: {
    width: "1280px",
    height: "720px",
  },
  initParams: initParams[0].value,
});

clip.addIncident(moveRight("0%",".skills-container",500,0,"easeInOutQuint"),0)
clip.addIncident(scale(1,".skills-container",200,0,"easeOutSine"),1000)

clip.addIncident(moveLeft("10%",".software-skills .title",500,0,"easeInOutCubic"),1200)
clip.addIncident(moveLeft("0%",".software-skills .skill",500,"@stagger(0,400)","easeInOutCubic"),1200)


clip.addIncident(moveLeft("10%",".personal-skills .title",500,0,"easeInOutCubic"),3200)
clip.addIncident(moveLeft("0%",".personal-skills .skill",500,"@stagger(0,400)","easeInOutCubic"),3200)


clip.addIncident(scale(0.9,".skills-container",200,0,"easeOutSine"),6500)
clip.addIncident(moveRight("100%",".skills-container",500,0,"easeInOutQuint"),7000)
clip.addIncident(width("100%",".software-skills .progress-bar",1500,"@stagger(0,400)","easeOutSine"),1700)
clip.addIncident(width("100%",".personal-skills .progress-bar",1500,"@stagger(0,400)","easeOutSine"),3700)

export default clip;
