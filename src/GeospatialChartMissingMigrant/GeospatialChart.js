import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useWorldAtlas } from './useWorldAtlas';
import { BubbleMap } from './BubbleMap';
import { useData } from './useData';
import { DateHistogram } from './DateHistogram';

const width = 960;
const height = 500;
const dateHistogramSize = 0.2;

const xValue = (d) => d['Reported Date'];

const GeospatialChart = () => {
  const worldAtlas = useWorldAtlas();
  const data = useData();
  const [brushExtent, setBrushExtent] = useState();

  if (!worldAtlas || !data) {
    return <pre>Loading...</pre>;
  }

  const filteredData = brushExtent
    ? data.filter((d) => {
        const date = xValue(d);
        return date > brushExtent[0] && date < brushExtent[1];
      })
    : data;

  return (
    <svg width={width} height={height}>
      <BubbleMap
        worldAtlas={worldAtlas}
        filteredData={filteredData}
        data={filteredData}
      />
      <g transform={`translate(0,${height - dateHistogramSize * height})`}>
        <DateHistogram
          data={data}
          width={width}
          height={dateHistogramSize * height}
          setBrushExtent={setBrushExtent}
          xValue={xValue}
        />
      </g>
    </svg>
  );
};

export default GeospatialChart;
