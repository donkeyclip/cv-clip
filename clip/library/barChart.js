
import { loadPlugin } from "@donkeyclip/motorcortex";
import MCGraphsDef from "@donkeyclip/motorcortex-graphs";
const Graph = loadPlugin(MCGraphsDef);

export const progressBar = (selector,datas) =>
  new Graph.ProgressBar(
      {
        data: datas
      ,
        timings: {
          intro: 1300,
          static: 3500,
          outro: 1000,
        },
        palette: {
          primary: "#E7F7F4",
          secondary:"#20212e",
          accent:"#8FEBD5",
          font: "#8FEBD5"
        },
        font:{
          size:"2.5rem",
        },
        options:{
          hidePercentage:false
        }
      },
      {
        selector,
        containerParams: {
          width: "600px",
          height: "250px",
        },
      }
    );