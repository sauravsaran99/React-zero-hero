
import { ExpenseDate } from "./ExpenseDate";

export const ExpenseItems = ({data}) => {

    // console.log(data)
    return (
        <>
        <ExpenseDate data={data.date}></ExpenseDate>
        <div>
            <div>{data.title}</div>
        </div>
        <div>{data.amount}</div>
        </>
    )
}