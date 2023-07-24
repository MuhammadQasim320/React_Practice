import "./FormExpence.css";
import { useState } from "react";

const FormExpence = (props) => {
  const [addTitle, setAddTitle] = useState("");
  const [addAmount, setAddAmount] = useState("");
  const [addDate, setAddDate] = useState("");

  const titleChangeHandler = (event) => {
    setAddTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAddAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setAddDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: addTitle,
      amount: addAmount,
      date: new Date(addDate),
    };
   
    props.onFormtoNewExpense(expenseData);
    //Two way binding step #2
    setAddTitle('');
    setAddAmount('');
    setAddDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            onChange={titleChangeHandler}
            //Two way binding intiially we decrlare a value 
            value={addTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
            //Two way binding
            value={addAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2020-01-01"
            max="2025-12-31"
            //Two way binding
            value={addDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expence</button>
      </div>
    </form>
  );
};

export default FormExpence;
