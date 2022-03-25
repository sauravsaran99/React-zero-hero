
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';

export const NewExpense = (props) => {

    const expenseData = (data) => {
        props.gettingData({...data, id: Math.random()});
    }

  return (
    <div className='new-expense'>
      <ExpenseForm deleveringData = {expenseData}/>
    </div>
  );
};
