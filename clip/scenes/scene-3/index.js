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

//const softwareSkills = [
  //   {
  //     name: "@initParams.softwareSkills.name1",
  //     value: "@initParams.softwareSkills.value1"
  //   },
  //   {
  //     name: "@initParams.softwareSkills.name2",
  //     value: "@initParams.softwareSkills.value2"
  //   }
  // ]

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
clip.addIncident(moveRight("0%",".skills-container",500,0,"easeInOutQuint"),0)

clip.addIncident(scale(1,".skills-container",200,0,"easeOutSine"),1000)


clip.addIncident(progressBar(".bar-chart-software-skills",initParams[0].value.softwareSkills),1000)
clip.addIncident(progressBar(".bar-chart-personal-skills",personalSkills),1000)

clip.addIncident(scale(0.9,".skills-container",200,0,"easeOutSine"),6500)
clip.addIncident(moveRight("100%",".skills-container",500,0,"easeInOutQuint"),7000)

export default clip;
