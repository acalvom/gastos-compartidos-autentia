import './AddUserForm.css'
import { useState } from 'react'
import { User } from '@/models/User'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { UserForm } from '@/constants/Home'

export const AddUserForm = () => {
  const [user, setUser] = useState<User>({ firstName: '', lastName: '' })
  const [errors, setErrors] = useState<User>({ firstName: '', lastName: '' })
  const [storedUsers, setStoredUsers] = useLocalStorage<User[]>('amigos', [])

  const resetForm = () => setUser({ firstName: '', lastName: '' })
  const isValidForm = () => {
    const formErrors = {
      firstName: !user.firstName ? UserForm.FieldRequired : '',
      lastName: !user.lastName ? UserForm.FieldRequired : '',
    }

    setErrors(formErrors)
    return Object.values(formErrors).every((error) => !error)
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({ ...errors, [e.target.id]: '' })
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isValidForm()) return

    setStoredUsers([...storedUsers, user])
    resetForm()
  }

  return (
    <form className="friend-form" onSubmit={handleOnSubmit} data-testid='add-user-form'>
      <div className="input-container">
        <div className="input-wrapper" data-testid='first-name-wrapper'>
          <input
            className="input"
            type="text"
            id="firstName"
            placeholder={UserForm.Name}
            value={user.firstName}
            onChange={handleOnChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="input-wrapper" data-testid='last-name-wrapper'>
          <input
            className="input"
            type="text"
            id="lastName"
            placeholder={UserForm.LastName}
            value={user.lastName}
            onChange={handleOnChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
      </div>
      <button className="button" type="submit" data-testid='add-user-button'>
        {UserForm.Button}
      </button>
    </form>
  )
}

export default AddUserForm
