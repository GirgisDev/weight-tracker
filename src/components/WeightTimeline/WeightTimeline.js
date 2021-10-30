import React, { useState } from 'react';
import style from './WeightTimeline.module.scss';
import LineChart from './../../common/LineChart/LineChart';
import SlideFromRightLayout from '../../common/SlideFromRightLayout/SlideFromRightLayout';
import AddEditWeight from './components/AddEditWeight/AddEditWeight';

const WeightTimeline = () => {
  const storageKeyName = 'weight-data';

  const getUserData = () => JSON.parse(localStorage.getItem(storageKeyName) || '{}');
  const getFormattedUserData = () => {
    let formattedData = {};
    Object.keys(getUserData())?.forEach(key => {
      formattedData[new Date(parseInt(key)).toLocaleDateString()] = getUserData()[key];
    });

    return formattedData;
  } 

  const getWeightDates = () => Object.keys(getUserData()).length
    ? Object.keys(getUserData()).map(key => new Date(parseInt(key)).toLocaleDateString())
    : [];
  const getWeights = () => Object.keys(getUserData()).length
    ? Object.keys(getUserData()).map(key => getUserData()[key])
    : [];

  const getWeightChartOptions = () => ({
    chart: { id: "weight-timeline" },
    stroke: { curve: 'smooth' },
    legend: {
      show: true, position: 'bottom', horizontalAlign: 'center', showForSingleSeries: true,
      customLegendItems: ['Weight on specific date'],
    },
    markers: {
      size: 2, strokeColors: '#fff', strokeWidth: 2, strokeOpacity: 0.9,
      fillOpacity: 1, shape: "circle", radius: 5, hover: { sizeOffset: 6, },
    },
    xaxis: {
      categories: getWeightDates()
    }
  })
  const getWeightChartSeries = () => ([{
    name: 'Weight in KG', data: getWeights()
  }])
  const [weightChartOptions, setWeightChartOptions] = useState(getWeightChartOptions());
  const [weightChartSeries, setWeightChartSeries] = useState(getWeightChartSeries());

  const [weight, setWeight] = useState(false);
  const [date, setDate] = useState(false);
  const [addEdit, toggleAddEdit] = useState(false);

  const sortObj = obj => {
    return Object.keys(obj).sort().reduce(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {});
  }

  const updateChart = () => {
    setWeightChartOptions(getWeightChartOptions());
    setWeightChartSeries(getWeightChartSeries());
  }

  const resetInputFields = () => {
    setDate('');
    setWeight('');
  }

  const addWeight = () => {
    const updatedData = sortObj({ ...getUserData(), [new Date(date).getTime()]: weight });
    localStorage.setItem(storageKeyName, JSON.stringify(updatedData));

    updateChart();
    toggleAddEdit(false);
    resetInputFields();
  }

  const deleteWeight = date => {
    const timeKey = new Date(date).getTime();
    const { [timeKey]: weight, ...weightData } = getUserData();
    localStorage.setItem(storageKeyName, JSON.stringify(weightData));

    updateChart();
    toggleAddEdit(false);
    resetInputFields();
  }

  return (
    <div className={style['weight-timeline']}>
      <h2 className="_text-center">Weight tracker</h2>
      <LineChart
        width={'100%'}
        height={'400px'}
        options={weightChartOptions}
        series={weightChartSeries} />

      <button
        onClick={() => toggleAddEdit(true)}
        className="btn btn--primary btn--lg">Add or edit weight</button>

      {addEdit && (
        <SlideFromRightLayout cancelFN={() => toggleAddEdit(false)}>
          <AddEditWeight
            weight={weight} setWeight={setWeight}
            date={date} setDate={setDate}
            currentData={getFormattedUserData()}
            updateFN={addWeight} 
            deleteFN={deleteWeight}
            cancelFN={() => toggleAddEdit(false)} />
        </SlideFromRightLayout>
      )}
    </div>
  );
}

export default WeightTimeline;