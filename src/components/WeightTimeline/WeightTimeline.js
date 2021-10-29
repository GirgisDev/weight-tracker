import React, { useEffect, useState } from 'react';
import style from './WeightTimeline.module.scss';
import LineChart from './../../common/LineChart/LineChart';
import SlideFromRightLayout from '../../common/SlideFromRightLayout/SlideFromRightLayout';
import AddEditWeight from './components/AddEditWeight/AddEditWeight';

const WeightTimeline = () => {
  const defaultOptions = {
    chart: { id: "weight-timeline" },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  };
  const defaultSeries = [{
    name: 'Weight in KG', data: [
      30, 40, 45, 50, 49, 60, 70, 91
    ]
  }]
  const [weightData, setWeightData] = useState(null);
  const [weight, setWeight] = useState(false);
  const [date, setDate] = useState(false);
  const [addEdit, toggleAddEdit] = useState(false);

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

      <button
        onClick={() => toggleAddEdit(true)}
        className="btn btn--primary btn--lg">Add or edit weight</button>

      {addEdit && (
        <SlideFromRightLayout cancelFN={() => toggleAddEdit(false)}>
          <AddEditWeight 
            weight={weight} setWeight={setWeight}
            date={date} setDate={setDate}
            updateFN={() => false} cancelFN={() => toggleAddEdit(false)} />
        </SlideFromRightLayout>
      )}
    </div>
  );
}

export default WeightTimeline;