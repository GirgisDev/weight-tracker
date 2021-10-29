import React from 'react';
import style from './AddEditWeight.module.scss';

const AddEditWeight = (props) => {
  const { weight, setWeight, date, setDate, updateFN, cancelFN } = props;

  const maxDate = () => {
    let date = new Date();
    return date.toISOString().substring(0, 10)
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
          onInput={e => setDate(e.target.value)} />
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
        <div onClick={cancelFN} className="btn btn--block btn--secondary">cancel</div>
      </div>
    </form>
  );
}

export default AddEditWeight;