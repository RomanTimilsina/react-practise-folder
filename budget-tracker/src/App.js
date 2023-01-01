import {Button, Stack} from 'react-bootstrap'
import React , {useState} from 'react'
import Container from 'react-bootstrap/Container'
import AddBudgetModal from './component/AddBudgetModal';
import AddExpenseModal from './component/AddExpenseModal';
import BudgetCard from './component/BudgetCard';
import { useBudgets } from './contexts/BudgetsContext';
import UncategorizedBudgetCard from './component/UncategorizedBudgetCard';
import TotalBudgetCard from './component/TotalBudgetCard';

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [showAddExpenseModalBudgetId, setShowAddExpenseModalBudgetId] = useState()

  const {budgets, getBudgetExpenses} = useBudgets()

  function openAddExpenseId(budgetId){
    setShowAddExpenseModalBudgetId(budgetId)
    setShowAddExpenseModal(true)
  }
  return (
    <>
      <Container className='my-4'>
        <Stack direction='horizontal' gap='2' className='mb-4'>
          <h1 className='me-auto'>Budgets</h1>
          <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
          <Button variant='outline-primary' onClick={openAddExpenseId}>Add Expense</Button>
        </Stack>
        <div style={{
          display:'grid',
          gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",
          alignItems:'flex-start',
          gap:'1rem'
        }}>
         {
         budgets.map(b => {
          const amount = getBudgetExpenses(b.id).reduce(
            (total, expenses) => total + expenses.amount
              ,0
            )
            return (
          <BudgetCard
          key = {b.id} 
          name = {b.name}
          amount = {amount} 
          max = {b.max}
          onOpenAddExpenseId ={() => openAddExpenseId(b.id)}
          onBudgetClick={() => setShowAddBudgetModal(true)}
          />
          )
        })
         }
         <UncategorizedBudgetCard 
         onBudgetClick={() => setShowAddBudgetModal(true)}
          onOpenAddExpenseId = {openAddExpenseId} />
         <TotalBudgetCard />
        </div>
        <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
        <AddExpenseModal defaultBudgetId={showAddExpenseModalBudgetId} show={showAddExpenseModal} handleClose={() => setShowAddExpenseModal(false)} />
      </Container>
    </>
  );
}

export default App;
