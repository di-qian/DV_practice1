import React, { useEffect, useState } from 'react';
import { csv } from 'd3';

// const baseUrl = 'https://opendata.maryland.gov/resource/4ibg-xizv.json?$';

// const getToday = () => {
//   const timeElapsed = Date.now();
//   const today = new Date(timeElapsed);
//   const formatToday = today.toISOString(); // "2020-06-13T18:30:00.000Z"

//   return formatToday;
// };

// export const useCovidData = () => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     const jsonify = (res) => res.json();
//     try {
//       const fetchCovidData = async () => {
//         await fetch(
//           baseUrl +
//             new URLSearchParams({
//               where: { county: 'Baltimore' },
//             })
//         )
//           .then(jsonify)
//           .then((data) => {
//             console.log(data);
//           });
//       };
//       fetchCovidData();
//     } catch (err) {
//       console.log(err);
//     }
//   }, []);

//   return data;
// };

const csvUrl =
  'https://gist.githubusercontent.com/di-qian/1e8d816753b3f374c25069193407f5a8/raw/764b2733d2fabc341cba37d5fae54751352c9587/mdcountycovidvac.csv';

const row = (d) => {
  d.fullyvaccinated = +d['FullyVaccinatedCumulative'];
  return d;
};

export const useCovidData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
