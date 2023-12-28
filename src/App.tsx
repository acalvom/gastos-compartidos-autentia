import { useState } from 'react'
import Layout from '@/layout/Layout'
import useLocalStorage from '@/hooks/useLocalStorage'

export const App = () => {
  const [storedName, setStoredName] = useLocalStorage<string>('name', '')
  const [storedCounter, setStoredCounter] = useLocalStorage<number>('count', 0)
  const [name, setName] = useState('')

  return (
    <Layout>
      <h1 data-testid="count">Counter: {storedCounter}</h1>
      <button data-testid="increment" onClick={() => setStoredCounter(storedCounter + 1)}>
        Increment
      </button>
      <button data-testid="decrement" onClick={() => setStoredCounter(storedCounter - 1)}>
        Decrement
      </button>

      <form data-testid="form" onSubmit={() => setStoredName(name)}>
        <div>
          <label htmlFor="name">Name: {storedName}</label>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <button>Submit</button>
      </form>
    </Layout>
  )
}

export default App
