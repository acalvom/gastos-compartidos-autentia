import { useState } from 'react'
import Layout from '@/layout/Layout'
export const App = () => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted', name)
  }

  return (
    <Layout>
      <h1 data-testid="count">Counter: {counter}</h1>
      <button data-testid="increment" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button data-testid="decrement" onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>

      <form data-testid="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <button>Submit</button>
      </form>
    </Layout>
  )
}

export default App
