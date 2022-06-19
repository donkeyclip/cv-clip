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
  selector: "#root",
  containerParams: {
    width: "1280px",
    height: "720px",
  },
  initParams: {
    softwareSkills: "@initParams.softwareSkills",
  },
});

const softwareSkills = [
  {
    name: "Abode Photoshop",
    value: 85,
  },
  {
    name: "Adobe Illustrator",
    value: 35,
  },
  {
    name: "Adobe After Effects",
    value: 74,
  },
  {
    name: "Apple Motion",
    value: 62,
  },
];

const personalSkills = [
  {
    name: "Creativity",
    value: 90,
  },
  {
    name: "Teanwork",
    value: 57,
  },
  {
    name: "Communication",
    value: 45,
  },
  {
    name: "Organizational",
    value: 78,
  },
  
];

clip.addIncident(moveRight("0%",".intro",500),0)

clip.addIncident(scale(1,".intro",200),1000)
clip.addIncident(width("10%", ".salutation",1),1500)
clip.addIncident(translateXY("0%","-50%",".salutation",1),1500)
clip.addIncident(moveLeft("10%", ".salutation",200),1500)
clip.addIncident(moveRight("10%",".name",500),1500)
clip.addIncident(moveTop("-100%",".salutation",1000),3000)
clip.addIncident(translateXY("0%","0%",".name",1),3000)
clip.addIncident(moveTop("15%",".name",1000),3000)
clip.addIncident(moveTop("5%",".photo",1000),3000)
clip.addIncident(moveTop("35%",".about",1000),3000)





clip.addIncident(moveTop("50%",".work-experience",1000),3000)
clip.addIncident(moveTop("70%",".languages",1000),3000)
clip.addIncident(moveTop("50%",".agelity",1000),3000)
clip.addIncident(moveTop("70%",".nationality",1000),3000)


clip.addIncident(moveTop("0%",".value-wrapper .value",500),4500)

clip.addIncident(scale(0.9,".intro",200),6000)
clip.addIncident(moveRight("100%",".intro",500),7000)


clip.addIncident(moveRight("0%",".skills-container",500),7000)

clip.addIncident(scale(1,".skills-container",200),8000)


clip.addIncident(progressBar(".bar-chart-software-skills",softwareSkills),8000)
clip.addIncident(progressBar(".bar-chart-personal-skills",personalSkills),8000)

clip.addIncident(scale(0.9,".skills-container",200),13500)
clip.addIncident(moveRight("100%",".skills-container",500),14000)

clip.addIncident(moveRight("0%",".edu-exp",500),14000)

clip.addIncident(scale(1,".edu-exp",200),15000)

export default clip;
