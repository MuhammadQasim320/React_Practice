import React from "react";
import './NewExpence.css';
import FormExpence from "./FormExpence";

const NewExpence = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),

        };
        props.onNewtoApp(expenseData);
    };
    

    return (
        <div className="new-expense">
        <FormExpence onFormtoNewExpense = {saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpence;