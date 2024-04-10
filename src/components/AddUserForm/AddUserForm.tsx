import { Commons, UserForm, initalUser, initalUserError } from '@/constants'
import { UserFormErrors } from '@/models'
import { AddUserDto } from '@/modules/users/application/dtos/add-user.dto'
import { ChangeEvent, FormEvent, useState } from 'react'
import './AddUserForm.css'

export interface AddUserFormProps {
  storedUsers: AddUserDto[]
  setStoredUser: (user: AddUserDto) => void
  // setStoredUsers: (users: StoredUser[]) => void
}

export const AddUserForm = ({ setStoredUser }: AddUserFormProps) => {
  const [user, setUser] = useState<AddUserDto>(initalUser)
  const [errors, setErrors] = useState<UserFormErrors>(initalUserError)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const resetForm = () => setUser(initalUser)
  const isValidForm = () => {
    const formErrors: UserFormErrors = {
      firstName: !user.firstName ? Commons.FieldRequired : '',
      lastName: !user.lastName ? Commons.FieldRequired : '',
    }

    setErrors(formErrors)
    return Object.values(formErrors).every((error) => !error)
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrors({ ...errors, [e.target.id]: '' })
    setIsDisabled(false)
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isValidForm()) return

    setStoredUser(user)
    // setStoredUsers([...storedUsers, { ...user, id: user.firstName + user.lastName }])
    resetForm()
  }

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
      <button className="button" type="submit" data-testid="add-user-button" disabled={isDisabled}>
        {UserForm.Button}
      </button>
    </form>
  )
}
