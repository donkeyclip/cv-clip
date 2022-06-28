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

const clip = new HTMLClip({
  html,
  css,
  selector: "#root4",
  containerParams: {
    width: "1280px",
    height: "720px",
  },
  initParams: {
    education:"@initParams.education",
    experience:"@initParams.experience",
    stylesheet: "@initParams.stylesheet"
  },
});

clip.addIncident(moveRight("0%",".edu-exp",500,0,"easeInOutQuint"),0)

clip.addIncident(scale(1,".edu-exp",200,0,"easeOutSine"),1000)

clip.addIncident(moveTop("0%",".edu",300,"@stagger(0,300)"),1600)
clip.addIncident(moveTop("0%",".exp",300,"@stagger(0,300)"),2000)

clip.addIncident(scale(0.9,".edu-exp",200,0,"easeOutSine"),4000)
clip.addIncident(moveRight("100%",".edu-exp",500,0,"easeInOutQuint"),5000)


export default clip;
