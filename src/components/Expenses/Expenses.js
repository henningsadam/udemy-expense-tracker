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

  const filteredExpenses = expenses.filter(
    expense => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className='expenses'>
      <ExpenseFilter
        onUpdateFilterYear={onUpdateFilterYearHandler}
        year={filterYear}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expenses.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
