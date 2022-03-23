
import { ExpenseDate } from "./ExpenseDate";
import '../Expenses/ExpenseItems.css'
import { Card } from '../UI/Card'
export const ExpenseItems = ({data}) => {

    // console.log(data)
    return (
        <>
        <Card className="Expense_card">
        <ExpenseDate data={data.date}></ExpenseDate>
        <div>
            <div>{data.title}</div>
        </div>
        <div className="amount">${data.amount}</div>
        </Card>
        </>
    )
}