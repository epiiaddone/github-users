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

const Doughnut2d = () => {
  const {repos} = React.useContext(AppContext);

  //data has to have the properties {label:  , value:}
  let languagesChartData = repos.reduce((total,repo)=>{
    const {language, stargazers_count} = repo;
    if(!language) return total;

    if(!total[language]) total[language] = {label:language, value:stargazers_count};
    else{
       total[language].value+= stargazers_count;
    }
    return total;
  },{})

  const languagesChartDataMostStarsTop5 = Object.values(languagesChartData).sort((a,b)=>{
    return b.value - a.value;
  }).slice(0,5)

  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Stars Per Language",
        //Set the theme for your chart
        theme: "fusion",
        doughnutRadius:"30",
        showPercentValues:"0"
      },
      // Chart Data
      data:languagesChartDataMostStarsTop5
    }
  
  };
  
  return <ReactFC {...chartConfigs} />
};

export default Doughnut2d;