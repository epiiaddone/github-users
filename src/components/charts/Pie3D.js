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

const Pie3D = ({data}) => {

  const {repos} = React.useContext(AppContext);

  let languagesChartData = repos.reduce((total,repo)=>{
    const {language} = repo;
    if(!language) return total;

    if(!total[language]) total[language] = {label:language, value:1};
    else total[language].value++;

    return total;
  },{})

  const languagesChartDataTop5 = Object.values(languagesChartData).sort((a,b)=>{
    return b.value - a.value;
  }).slice(0,5)  

   
  const chartConfigs = {
    type: "pie3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Most Used Languages",
        //Set the theme for your chart
        theme: "fusion",
        decimals:"0",
        pieRadius:"90"
      },
      // Chart Data
      data:languagesChartDataTop5
    }
  
  };
  
  return <ReactFC {...chartConfigs} />
};

export default Pie3D;