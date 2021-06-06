import React from 'react';
import * as d3 from 'd3';

const GetCSV = () => {
  const csvUrl =
    'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';

  d3.csv(csvUrl).then((data) => {
    let message = '';
    message = message + Math.round(d3.csvFormat(data).length / 1024 + ' kB\n');
    message = message + (data.length + ' rows');
    message = message + (data.columns.length + ' columns');

    document.getElementById('message-container').textContent = message;
  });
  //   const fetchText = async (url) => {
  //     const response = await fetch(url);
  //     return await response.text();
  //   };

  //   fetchText(csvUrl).then((text) => {
  //     const data = d3.csvParse(text);
  //     let message = '';
  //     message = message + Math.round(text.length / 1024 + ' kB\n');
  //     message = message + (data.length + ' rows');
  //     message = message + (data.columns.length + ' columns');
  //     document.body.textContent = message;
  //   });
  return (
    <div>
      <pre id="message-container"></pre>
    </div>
  );
};

export default GetCSV;
