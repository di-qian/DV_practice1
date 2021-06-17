import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/di-qian/1e8d816753b3f374c25069193407f5a8/raw/764b2733d2fabc341cba37d5fae54751352c9587/mdcountycovidvac.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d['FullyVaccinatedCumulative'] = +d['FullyVaccinatedCumulative'];
      d['VACCINATION_DATE'] = new Date(d['VACCINATION_DATE']);
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
