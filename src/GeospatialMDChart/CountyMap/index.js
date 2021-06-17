import React, { useMemo, useState, useEffect } from 'react';
import { Marks } from './Marks';
import { interpolateYlGn, scaleSequential, max } from 'd3';

const fadeOpacity = 0.4;

export const CountyMap = ({ data, covidData, rowByCounty, onHoveredValue }) => {
  const [hoveredValue, setHoveredValue] = useState(null);
  const colorValue = (d) => +d.FullyVaccinatedCumulative;

  const colorScale = scaleSequential(interpolateYlGn).domain([
    0,
    max(covidData, colorValue),
  ]);

  useEffect(() => {
    onHoveredValue(hoveredValue);
  }, [hoveredValue]);

  return (
    <Marks
      data={data}
      rowByCounty={rowByCounty}
      onHover={setHoveredValue}
      hoveredValue={hoveredValue}
      fadeOpacity={fadeOpacity}
      colorScale={colorScale}
      colorValue={colorValue}
    />
  );
};
