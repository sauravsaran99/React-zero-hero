
import './ExpenseForm.css';
import { useState } from 'react';
export const ExpenseForm = (props) => {

    const [title, updateTitle] = useState('');
    const [amount, updateAmount] = useState('');
    const [date, updateDate] = useState();

    const saveTitle = (event) => {
      updateTitle(event.target.value)
    }

    const saveAmount = (event) => {
      updateAmount(event.target.value)
    }

    const saveDate = (event) => {
      updateDate(event.target.value)
    }

    const formDataFunction = (e) => {
      e.preventDefault();
      const formData = {
        title: title,
        amount: amount,
        date: new Date(date)
      }

      props.deleveringData(formData);
    }
  return (
    <form onSubmit={formDataFunction}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={saveTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={saveAmount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={saveDate}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};
