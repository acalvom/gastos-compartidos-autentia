import { useState } from 'react'
import './App.css'
export const App = () => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted', name)
  }
  return (
    <div className="app-container">
      <header className="app-header">
        <nav className="navbar">
          <ul>
            <li>Home</li>
          </ul>
        </nav>
      </header>

      <main className="app-main">
        <h1 data-testid="count">Counter: {counter}</h1>
        <button data-testid="add" onClick={() => setCounter(counter + 1)}>Increment</button>
        <button data-testid="remove" onClick={() => setCounter(counter - 1)}>Decrement</button>

        <form data-testid="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button>Submit</button>
        </form>
      </main>

      <footer className="app-footer">
        <p>&copy; 2023 Gestión de gastos - Autentia.</p>
      </footer>
    </div>
  )
}

export default App
