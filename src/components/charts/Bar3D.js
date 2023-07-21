import React from 'react';
import ReactDOM from "react-dom";
import { AppContext } from '../../context/context';

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Bar3D = () => {

  const {repos} = React.useContext(AppContext);

  let repoForks = repos.reduce((total,repo)=>{
    const {name, forks} = repo;
    if(!name) return total;

    if(!total[name]) total[name] = {label:name, value:forks};
    else total[name].value+= forks;

    return total;
  },{})

  const repoForksTop5 = Object.values(repoForks).sort((a,b)=>{
    return b.value - a.value;
  }).slice(0,5)  


  const chartConfigs = {
    type: "bar3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Forked Repos",
        yAxisName:"Rorks",
        xAxisName:"Repo",
        xAxisFontSize:"16px",
        yAxisFontSize:"16px",
        theme: "fusion",
        decimals:"0"
      },
      // Chart Data
      data:repoForksTop5
    }
  }

    return <ReactFC {...chartConfigs} />
};

export default Bar3D;