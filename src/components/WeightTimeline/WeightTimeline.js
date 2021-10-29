import React, { useEffect, useState } from 'react';
import style from './WeightTimeline.module.scss';
import LineChart from './../../common/LineChart/LineChart';

const WeightTimeline = () => {
  const defaultOptions = {
    chart: { id: "wight-timeline" },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };
  const defaultSeries = [{ name: 'Weight in KG', data: [
    30, 40, 45, 50, 49, 60, 70, 91
  ] }]
  const [weightData, setWeightData] = useState(null);

  useEffect(() => {
    if (!weightData) setWeightData({});
  }, [weightData]);
  
  return (
    <div className={style['weight-timeline']}>
      <h2 className="_text-center">Weight tracker</h2>
      <LineChart 
        width={'100%'} 
        height={'400px'}
        options={defaultOptions}
        series={defaultSeries} />

      <button className="btn btn--primary btn--lg">Add or edit weight</button>
    </div>
  );
}
 
export default WeightTimeline;