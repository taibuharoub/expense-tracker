import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //using mutiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //using one state, manually manage other states
  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  const titleChangerHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);

    /* setUserInput({
      ...userInput, //do this first, manually mananging other states
      enteredTitle: event.target.value,
    }); */

    //better alternative to the above for updating state that depends on the pervious state
    //pass a function to the state  updating function,and then return the
    //new state
    /* setUserInput((pervState) => {
      return { ...pervState, enteredTitle: event.target.value };
    }); */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /* setUserInput({
      ...userInput, //do this first, manually mananging other states
      enteredAmount: event.target.value,
    }); */
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /* setUserInput({
      ...userInput, //do this first, manually mananging other states
      enteredDate: event.target.value,
    }); */
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), //we construct a new date coz what we receive from the input is  a string
    };

    //instead of logging the expense data we call the onSaveExpenseData function
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    // here when the form is submitted we can setEnteredTitle() and
    // set it to an empty string
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //two-way binding
            onChange={titleChangerHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
