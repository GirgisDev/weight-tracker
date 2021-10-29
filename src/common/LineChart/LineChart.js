import React from 'react';
import Chart from "react-apexcharts";
import style from './LineChart.module.scss';

const LineChart = ({ options, series, width, height }) => {
  return (
    <div className={style['line-chart']}>
      <Chart
        options={options || {}}
        series={series || []}
        type="line"
        width={width || "500"}
        height={height || width || '500'}
      />
    </div>
  );
}

export default LineChart;