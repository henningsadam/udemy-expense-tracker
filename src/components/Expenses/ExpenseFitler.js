import React from 'react';
import './ExpenseFitler.css';

const ExpenseFilter = (props) => {
  const changeHandler = (event) => {
    const year = event.target.value;
    props.onUpdateFilterYear(year);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={changeHandler} value={props.year}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
