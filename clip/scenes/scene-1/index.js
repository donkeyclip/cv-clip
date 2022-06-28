import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { width } from "../../library/width";
import { scale } from "../../library/scale";
import { moveLeft } from "../../library/moveLeft";
import { moveRight } from "../../library/moveRight";
import { moveTop } from "../../library/moveTop";
import { translateXY } from "../../library/translateXY";

const clip = new HTMLClip({
  html,
  css,
  selector: "#root1",
  containerParams: {
    width: "1280px",
    height: "720px",
  },
  initParams: {
    intro: "@initParams.intro",
    stylesheet: "@initParams.stylesheet"
  },
});

clip.addIncident(moveRight("0%",".intro",500,0,"easeInOutQuint"),0)
clip.addIncident(scale(1,".intro",200,0,"easeOutSine"),1000)
clip.addIncident(width("10%",".intro .salutation",1),2000)
clip.addIncident(translateXY("0%","-50%",".intro .salutation",1),2000)
clip.addIncident(moveLeft("10%", ".intro .salutation",300),2000)
clip.addIncident(moveRight("10%",".intro .name",300),2000)
clip.addIncident(moveTop("-50%",".intro .salutation",1000),3500)
clip.addIncident(translateXY("0%","0%",".intro .name",1),3500)

clip.addIncident(moveTop("15%",".intro .name",1000,0,"easeInOutCubic"),3500)
clip.addIncident(moveTop("5%",".intro .photo",1000,0,"easeInOutCubic"),3500)
clip.addIncident(moveTop("37%",".intro .about",1000,0,"easeInOutCubic"),3500)

clip.addIncident(moveTop("55%",".intro .work-experience",1000,0,"easeInOutCubic"),3500)
clip.addIncident(moveTop("75%",".intro .languages",1000,0,"easeInOutCubic"),3500)
clip.addIncident(moveTop("55%",".intro .agelity",1000,0,"easeInOutCubic"),3500)
clip.addIncident(moveTop("75%",".intro .nationality",1000,0,"easeInOutCubic"),3500)


clip.addIncident(moveRight("0%",".intro .value-wrapper .value-r",500),5000)
clip.addIncident(moveLeft("0%",".intro .value-wrapper .value-l",500),5000)

clip.addIncident(scale(0.9,".intro",200,0,"easeOutSine"),8000)
clip.addIncident(moveRight("100%",".intro",500,0,"easeInOutQuint"),9000)

export default clip;
