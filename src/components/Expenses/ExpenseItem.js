import './ExpenseItem.css';
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  
  const clickHandler = () => {setTitle('Updated!')}

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Update Name</button>
    </Card>
  );
}

export default ExpenseItem;