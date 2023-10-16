import ExpenseItem from './ExpenseItem';
import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFitler';

const Expenses = ({ expenses }) => {
  const [filterYear, setFitlerYear] = useState('2022');

  const onUpdateFilterYearHandler = (year) => {
    setFitlerYear(year);
  };

  return (
    <Card className='expenses'>
      <ExpenseFilter
        onUpdateFilterYear={onUpdateFilterYearHandler}
        year={filterYear}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
