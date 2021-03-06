import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import GetCSV from './GetCSV';
//import BarChart from './BarChart/BarChart';
// import ScatterChart from './ScatterChart/ScatterChart';
// import LineChart from './LineChart';
//import GeospatialChart from './GeospatialChart/GeospatialChart';
//import MenusWReact from './MenusWReact/MenusWReact';
//import ScatterChart from './ScatterChartWMenu/ScatterChart';
//import ScatterChart from './ScatterChartWMenuPolished/ScatterChart';
//import ScatterChart from './ScatterChartColor/ScatterChart';
//import GeospatialChart from './GeospatialChartNew/GeospatialChart';
import GeospatialChart from './GeospatialMDChart/GeospatialChart';
//import GeospatialChart from './GeospatialChartMissingMigrant/GeospatialChart';
//import LineChart from './GeospatialMDChart/HistogramChart/LineChart';

const width = 960;
const height = 500;

const circleRadius = 30;
const initialMousePosition = { x: width / 2, y: height / 2 };

function App() {
  // const [mousePosition, setMousePosition] = useState(initialMousePosition);

  // const handleMousemove = useCallback(
  //   (event) => {
  //     const { clientX, clientY } = event;
  //     setMousePosition({ x: clientX, y: clientY });
  //   },
  //   [setMousePosition]
  // );

  return (
    <>
      <GeospatialChart />
      {/* <MenusWReact /> */}
      {/* <GeospatialChart /> */}
      {/* <LineChart /> */}
      {/* <ScatterChart /> */}
      {/* <BarChart /> */}
      {/* <svg width={width} height={height} onMouseMove={handleMousemove}>
        <circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r={circleRadius}
        ></circle>
      </svg> */}
    </>
  );
}

export default App;
