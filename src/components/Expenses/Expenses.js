import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFitler';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
  const [filterYear, setFitlerYear] = useState('2022');

  const onUpdateFilterYearHandler = (year) => {
    setFitlerYear(year);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className='expenses'>
      <ExpenseFilter
        onUpdateFilterYear={onUpdateFilterYearHandler}
        year={filterYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
