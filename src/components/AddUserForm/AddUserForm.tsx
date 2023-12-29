import './AddUserForm.css'
import { useState } from 'react'
import { StoredUser, User } from '@/models/User'
import { UserForm } from '@/constants/Home'
import { UserFormErrors } from '@/models/Errors'

interface AddUserFormProps {
  storedUsers: StoredUser[]
  setStoredUsers: (users: StoredUser[]) => void
}

const initalUser = {
  firstName: '',
  lastName: '',
}

export const AddUserForm = ({ storedUsers, setStoredUsers }: AddUserFormProps) => {
  const [user, setUser] = useState<User>(initalUser)
  const [errors, setErrors] = useState<UserFormErrors>(initalUser)

  const resetForm = () => setUser(initalUser)
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

    setStoredUsers([...storedUsers, { ...user, id: user.firstName + user.lastName }])
    resetForm()
  }

  // TODO: Split this into a separate components
  return (
    <form className="friend-form" onSubmit={handleOnSubmit} data-testid="add-user-form">
      <div className="input-container">
        <div className="input-wrapper" data-testid="first-name-wrapper">
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
        <div className="input-wrapper" data-testid="last-name-wrapper">
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
      <button className="button" type="submit" data-testid="add-user-button">
        {UserForm.Button}
      </button>
    </form>
  )
}
