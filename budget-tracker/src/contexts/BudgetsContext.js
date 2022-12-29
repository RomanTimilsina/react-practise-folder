import React, {useContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const BudgetsContext = React.createContext()

export function useBudgets(){
  return useContext(BudgetsContext)
}

export const BudgetsProvider = ({children}) => {

  const [budget, setBudgets] = useState([])
  const [expenses, setExpenses] = useState([])

  function getBudgetExpenses(budgetId){
    return expenses.filter((expense) => expense.budgetId === budgetId)
  }

  function addBudgets(name, max){
    return setBudgets(prevBudget => {
      if(prevBudget.find(budget => budget.name === name)){
        return prevBudget
      } 
      return [...prevBudget, {id:uuidv4(), name, max}]
    })
  }

  function addExpense(budgetId, description, amount){
    return setExpenses(prevExpense => {
      return [...prevExpense, {id:uuidv4(), budgetId, description, amount}]
    })
  }

  function deleteExpense({id}){
    setExpenses(prevExpense => {
      return prevExpense.filter((expense) => expense.id !== id)
    })
    
  }
  
  function deleteBudget({id}){
    setBudgets(prevBudget => {
      return prevBudget.filter((b) => b.id !== id)
    })
  }
  

  return <BudgetsContext.Provider value = 
  {{
    budget,
    expenses,
    getBudgetExpenses,
    deleteExpense,
    deleteBudget,
    addBudgets,
    addExpense
  }}>
    {children}
  </BudgetsContext.Provider>
}
