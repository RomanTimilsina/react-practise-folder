import React from 'react'
import { Button, Card, ProgressBar, Stack } from 'react-bootstrap'
import { currencyFormatter } from '../utils'

export default function BudgetCard({name, amount, max, gray, onOpenAddExpenseId,  lacksButton, onViewExpenseId}) {

  const classNames = []
  if(amount>max){
    classNames.push('bg-danger','bg-opacity-10')
  }
  else if(gray) {
    classNames.push('bg-light')
  }

  return (
    <div>
      <Card >
      <Card.Body className={classNames.join(' ')}>
        <Card.Title 
        className = 
        'd-flex justify-content-between mb-3 fw-normal align-items-baseline'>
            <div className='me-2'>{name}</div>
            <div className='align-items-baseline'>
               {currencyFormatter.format(amount)}
               {max && <span className='text-muted fs-6 ms-1'> / {currencyFormatter.format(max)}</span>}
            </div>
        </Card.Title>
        
          {max && <ProgressBar
          variant={getProgressBarVariant(amount,max)}
          min={0}
          now={amount}
          max={max}
          />}
          {!lacksButton && <Stack direction='horizontal' gap="2" className='mt-4'>
            <Button variant="outline-primary" onClick={onOpenAddExpenseId}  className='ms-auto'>  Add Expense </Button>
            <Button variant="outline-secondary" onClick={onViewExpenseId}> View Expense </Button>
          </Stack>}
        </Card.Body>
      </Card>
    </div>
  )
}

function getProgressBarVariant(amount, max){
  const ratio = amount/max
  if(ratio<0.5) return 'primary'
  if(ratio<0.75) return 'warning'
  return 'danger'
}
