import React,{useRef} from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { UNCATEGORIZED_BUDGET_ID, useBudgets} from '../contexts/BudgetsContext'

export default function AddBudgetModal({show, handleClose, defaultBudgetId}) {
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef()

  const {addExpense, budgets} = useBudgets()

  function handleSubmit(e){
    e.preventDefault()
    addExpense({
      description:descriptionRef.current.value,
      amount:parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value
    })
    console.log(budgetIdRef.current.value)
    handleClose()
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title> New Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className='mb-3' controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control ref={descriptionRef} type='text' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='max'>
            <Form.Label>amount</Form.Label>
            <Form.Control 
            ref={amountRef} 
            type='number' 
            required 
            min={0} 
            step={.01}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='budgetId'>
            <Form.Label>BudgetId</Form.Label>
            <Form.Select
            defaultValue= {defaultBudgetId}
            ref={budgetIdRef} 
            >
              <option key={UNCATEGORIZED_BUDGET_ID} >Uncategorzied</option>
              {
                budgets.map(budget => {
                 return  <option key={budget.id} value={budget.id}>{budget.name}</option>
                })
              }
            </Form.Select>
        </Form.Group>
        <div className='d-flex justify-content-end'>
          <Button variant='primary' type='submit'>Add</Button>
        </div>
      </Modal.Body>
      </Form>
    </Modal>
  )
}
