
import './ExpenseForm.css';
import { useState } from 'react';
export const ExpenseForm = (props) => {

  
    const [title, updateTitle] = useState('');
    const [amount, updateAmount] = useState('');
    const [date, updateDate] = useState();


// const [allData, updateAllData] = useState({
//   title:'',
//   amount: '',
//   data: ''
// });


    const saveTitle = (event) => {

      updateTitle(event.target.value)
      // updateAllData((prev) => {return {...prev,title: event.target.value}});
      // console.log(allData)
    }

    const saveAmount = (event) => {
      updateAmount(event.target.value)
      // updateAllData((prev) => {return {...prev, amount: event.target.value}})
    }

    const saveDate = (event) => {
      updateDate(event.target.value)
      // updateAllData((prev) => {return {...prev, data: new Date(event.target.value)}})
    }

    const formDataFunction = (e) => {
      e.preventDefault();
      const formData = {
        title: title,
        amount: amount,
        date: new Date(date)
      }
      // const formData = allData;
      // console.log(allData)
      props.deleveringData(formData);
      updateTitle('');
      updateAmount('');
      updateDate('')
    }
  return (
    <form onSubmit={formDataFunction}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={saveTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={amount} onChange={saveAmount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={saveDate}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};
