import {Button, Stack} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import BudgetCard from './component/BudgetCard';

function App() {
  return (
    <>
      <Container className='my-4'>
        <Stack direction='horizontal' gap='2' className='mb-4'>
          <h1 className='me-auto'>Budgets</h1>
          <Button variant='primary'>Add Budget</Button>
          <Button variant='outline-primary'>Add Expense</Button>
        </Stack>
        <div style={{
          display:'grid',
          gridTemplateColumns:"repeat(auto-fill,minmax(500px,1fr))",
          alignItems:'flex-start',
          gap:'1rem'
        }}>
          <BudgetCard name='Entertainment' amount='600' max='400' />
        </div>
      </Container>
    </>
  );
}

export default App;
