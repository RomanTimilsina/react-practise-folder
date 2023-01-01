
import React,{useRef} from 'react'
import { Button,  Modal, Stack } from 'react-bootstrap'
import { UNCATEGORIZED_BUDGET_ID, useBudgets} from '../contexts/BudgetsContext'

export default function ViewExpenseModal({budgetId, handleClose}) {
  
  const {getBudgetExpenses, budgets, deleteBudget, deleteExpense} = useBudgets()
  const budget =( budgetId === UNCATEGORIZED_BUDGET_ID ) ? {name: 'Uncategorized', id: UNCATEGORIZED_BUDGET_ID} : 
  budgets.find(b => b.id === budgetId)
 
  
  return (
    <Modal show={budgetId != null} onHide={handleClose}>
     
      <Modal.Header closeButton>
        <Modal.Title>
            <Stack
            direction='horizontal'
            gap='2'
            >
              <div>Expenses-{budget?.name}</div>
            { budgetId !== UNCATEGORIZED_BUDGET_ID  && 
            <Button onClick={() => deleteBudget(budget)} variant='outline-danger'>Delete</Button>}
            </Stack>
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack
        direction='vertical'
        gap = '3'
        >
          {getBudgetExpenses(budgetId).map(expense => {
            return <Stack direction='horizontal'>
              <span className='me-auto'>{expense.description} </span>
              {expense.amount}
              <Button 
              onClick={() => deleteExpense(expense)}
              className='ms-2 sm'
              variant='outline-danger'>&times;</Button>
            </Stack>
          })
          }
          
        </Stack>
      </Modal.Body>
      
    </Modal>
  )
}

