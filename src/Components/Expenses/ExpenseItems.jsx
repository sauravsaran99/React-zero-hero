
import { ExpenseDate } from "./ExpenseDate";
import '../Expenses/ExpenseItems.css'
import { Card } from '../UI/Card'
import { ExpenseDateFilter } from "./ExpenseDateFilter";
import { useState } from "react";

let len = 0;
export const ExpenseItems = ({totalData}) => {
    // console.log('total', totalData)
    
   

    const [allData, updateAllData] = useState(totalData);

    if(len < allData.length) {
        len = allData.length;
    }

    console.log(len, allData.length, totalData.length)
    // if(length < totalData.length) {
    //     updateAllData(totalData)
    // }

    if(totalData.length > len) {
        console.log('1', totalData)
        updateAllData([...totalData])
        console.log('2', allData)
    }

    // console.log('total',totalData, 'all',allData)

    const getFilterDate = (date) => {

        updateAllData(totalData.filter((el) =>  el.date.getFullYear() === Number(date)));
    }
    return (
        <>
        <Card className="Expense_card">
        <ExpenseDateFilter  sendDate={getFilterDate}></ExpenseDateFilter>
        </Card>
        { allData.map((e) => 
        <Card key={e.id} className="Expense_card">
        <ExpenseDate data={e.date}></ExpenseDate>
        <div>
            <div className="title_size">{e.title}</div>
        </div>
        <div className="amount">$ {e.amount}</div>
        </Card>
        )
}
        </>
    )
}