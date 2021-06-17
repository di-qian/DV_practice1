import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { CountyMap } from './CountyMap';
import TimeChart from './HistogramChart/TimeChart';

import { useGeoData } from './useGeoData';
import { useCovidData } from './useCovidData';

import { ToolTip } from './ToolTip';

const width = 1100;
const height = 700;
const dateHistogramSize = 0.25;

const selectedDate = '05/10/2021 10:00:00 AM';

const GeospatialChart = () => {
  const data = useGeoData();
  const covidData = useCovidData();
  const [hoveredValue, setHoveredValue] = useState(null);
  const [mousePosition, setMousePosition] = useState(null);

  const [brushExtent, setBrushExtent] = useState();

  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    },
    [setMousePosition]
  );

  const getDate = (inDate) => {
    const date = new Date(inDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return year + '-' + month + '-' + dt;
  };

  if (!data || !covidData) {
    return <pre>Loading...</pre>;
  }

  const filteredData = covidData.filter(
    (d) => getDate(d.VACCINATION_DATE) === getDate(selectedDate)
  );

  // const filteredData = brushExtent
  //   ? covidData.filter((d) => {
  //       const date = xValue(d);
  //       console.log(date);
  //       return date > brushExtent[0] && date < brushExtent[1];
  //     })
  //   : covidData;

  // const filteredData = covidData.filter((d) => {
  //   const date = xValue(d);
  //   console.log(date);
  //   return date > brushExtent[0] && date < brushExtent[1];
  // });

  const rowByCounty = new Map();
  filteredData.forEach((d) => {
    rowByCounty.set(d.County, d);
  });

  return (
    <>
      <svg
        className="mapbg"
        width={width}
        height={height}
        onMouseMove={handleMouseMove}
      >
        <CountyMap
          data={data}
          covidData={covidData}
          rowByCounty={rowByCounty}
          onHoveredValue={setHoveredValue}
        />
      </svg>

      <h2 className="headerText">Maryland Covid 19 Vaccination by County</h2>
      <h3 className="dateText">
        Date: {getDate(selectedDate)} to {getDate(selectedDate)}
      </h3>

      <TimeChart
        data={covidData}
        width={width}
        height={dateHistogramSize * height}
        //xValue={xValue}
        //setBrushExtent={setBrushExtent}
      />

      {hoveredValue ? (
        <ToolTip
          hoveredValue={hoveredValue}
          hoveredData={rowByCounty.get(hoveredValue)}
          mousePosition={mousePosition}
        />
      ) : null}
    </>
  );
};

export default GeospatialChart;
