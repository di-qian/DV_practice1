import { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature } from 'topojson';

const jsonUrl =
  'https://gist.githubusercontent.com/di-qian/c990854620364f452311ade8e15db0a3/raw/0912547deeff4b88ece5caf4fe5628c717c41794/mdcountyshape.json';

export const useGeoData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    json(jsonUrl).then((topology) => {
      const { MarylandCountyBoundary } = topology.objects;
      setData(feature(topology, MarylandCountyBoundary));
    });
  }, []);

  return data;
};
