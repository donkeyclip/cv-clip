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
import { opacity } from '../../library/opacity';

const clip = new HTMLClip({
  html,
  css,
  selector: "#root2",
  containerParams: {
    width: "1280px",
    height: "720px",
  },
  initParams: {
    contact:"@initParams.contact",
    stylesheet:"@initParams.stylesheet"
  },
});

clip.addIncident(moveRight("0%",".contact",500,0,"easeInOutQuint"),0)

clip.addIncident(scale(1,".contact",200,0,"easeOutSine"),1000)
clip.addIncident(moveLeft("0%",".info",500,"@stagger(0,500)","easeInOutCubic"),1500)

clip.addIncident(scale(0.9,".contact",200,0,"easeOutSine"),5000)
clip.addIncident(moveRight("100%",".contact",500,0,"easeInOutQuint"),6000)
export default clip;
