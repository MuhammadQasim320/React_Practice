import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpence from "./components/AddNewExpence/NewExpence";

const PreDefinedExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { // Thhis is new pra
     id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses ,setExpenses]= useState(PreDefinedExpenses);
  const saveExpenseDataHandler2 = (expense) => {
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses];
    });

  };
  return (
    <div>
      <NewExpence onNewtoApp = {saveExpenseDataHandler2} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
