import '../Expenses/ExpenseDate.css'
import { Card } from '../UI/Card'
export const ExpenseDate = (props) => {

    // console.log(props.data);
    const month = props.data.toLocaleString('en-us', {month: 'long'});
    const day = props.data.toLocaleString('en-us', {day: '2-digit'});
    const year = props.data.getFullYear();
    return (
        <>
        <Card className='date_box'>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
        </Card>
        </>
    )
}