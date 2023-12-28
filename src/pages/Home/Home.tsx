import './Home.css'
import useLocalStorage from '@/hooks/useLocalStorage'
import Layout from '@/layout/Layout'
import { User } from '@/models/User'
import { useState } from 'react'

export const Home = () => {
  const [user, setUser] = useState<User>({ firstName: '', lastName: '' })
  const [errors, setErrors] = useState<User>({ firstName: '', lastName: '' })
  const [storedUsers, setStoredUsers] = useLocalStorage<User[]>('amigos', [])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({ ...errors, [e.target.id]: '' })
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const resetForm = () => setUser({ firstName: '', lastName: '' })
  const isValidForm = () => {
    const formErrors = {
      firstName: !user.firstName ? 'Campo obligatorio' : '',
      lastName: !user.lastName ? 'Campo obligatorio' : '',
    }

    setErrors(formErrors)
    return Object.values(formErrors).every((error) => !error)
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isValidForm()) return

    setStoredUsers([...storedUsers, user])
    resetForm()
  }

  return (
    <Layout>
      <form className="friend-form" onSubmit={handleOnSubmit}>
        <div className="input-container">
          <div className="input-wrapper">
            <input
              className="input"
              type="text"
              id="firstName"
              placeholder="Nombre"
              value={user.firstName}
              onChange={handleOnChange}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>
          <div className="input-wrapper">
            <input
              className="input"
              type="text"
              id="lastName"
              placeholder="Apellido"
              value={user.lastName}
              onChange={handleOnChange}
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </div>
        </div>
        <button className="button" type="submit">
          🫂 Añadir amigo
        </button>
      </form>
    </Layout>
  )
}

export default Home
