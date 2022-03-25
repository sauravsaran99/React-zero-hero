import "../Expenses/ExpenseDateFilter.css"

export const ExpenseDateFilter = (props) => {

    const dateData = (e) => {
        // console.log(e.target.value);
        props.sendDate(e.target.value);
    }
    return (
        <>
            <h4>Filter by Date</h4>
            <div>
            <select name="Date" id="Date" onChange={dateData}>
 <option>Filter Date</option>
  <option value="2022">2022</option>
  <option value="2021">2021</option>
  <option value="2020">2020</option>
  <option value="2019">2019</option>
</select>
</div>
        </>
    )
}