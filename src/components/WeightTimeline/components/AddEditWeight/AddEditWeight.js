import React, { useState } from 'react';
import style from './AddEditWeight.module.scss';

const AddEditWeight = (props) => {
  const { currentData, weight, setWeight, date, setDate, updateFN, deleteFN, cancelFN } = props;
  const [alreadyExists, toggleAlreadyExists] = useState(false);

  const maxDate = () => {
    let date = new Date();
    return date.toISOString().substring(0, 10)
  }

  const checkIfExists = val => {
    const enteredFormattedVal = new Date(val).toLocaleDateString();
    if (currentData[enteredFormattedVal]) {
      setWeight(currentData[enteredFormattedVal]);
      toggleAlreadyExists(true);
    } else {
      setWeight('');
      toggleAlreadyExists(false);
    }

    setDate(val)
  }

  return (
    <form className={style['add-edit-weight']}>
      <div className="form-group">
        <input
          type="date"
          className="form-group__input"
          name="date" id="date"
          placeholder="Date of weight"
          value={date}
          max={maxDate()}
          onInput={e => checkIfExists(e.target.value)} />
        <label htmlFor="date" className="form-group__label">Date</label>
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-group__input form-group__input--number"
          name="weight" id="weight"
          placeholder="Weight in KG"
          value={weight}
          onInput={e => setWeight(e.target.value)} />
        <label htmlFor="weight" className="form-group__label">Weight in KG</label>
      </div>

      <div className={style['add-edit-weight__actions']}>
        <div onClick={updateFN} className="btn btn--block btn--primary">Update</div>
        {alreadyExists && (
          <div onClick={() => deleteFN(date)} className="btn btn--block btn--danger">Delete</div>
        )}
        <div onClick={cancelFN} className="btn btn--block btn--secondary">Cancel</div>
      </div>
    </form>
  );
}

export default AddEditWeight;