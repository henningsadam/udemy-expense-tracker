import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  // Form display logic

  const [isExpenseFormDisplayed, setIsExpenseFormDisplayed] = useState(false);

  const clickFormDisplayHandler = () => {
    setIsExpenseFormDisplayed(!isExpenseFormDisplayed);
  };

  return (
    <div className='new-expense'>
      {isExpenseFormDisplayed ? (
        <ExpenseForm 
          onSaveExpenseData={onSaveExpenseDataHandler} 
          onCancel={clickFormDisplayHandler}
          />
      ) : (
        <button onClick={clickFormDisplayHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
