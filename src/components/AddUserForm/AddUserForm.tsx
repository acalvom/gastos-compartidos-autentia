import { Commons, UserForm, initalUser, initalUserError } from '@/constants'
import { UserFormErrors } from '@/models'
import { NewUser } from '@/modules/users/domain/new-user'
import { useAddUser } from '@/modules/users/ui/components/use-add-user.hook'
import { ChangeEvent, FormEvent, useState } from 'react'
import './AddUserForm.css'

export const AddUserForm = () => {
  const { addUser } = useAddUser()
  const [user, setUser] = useState<NewUser>(initalUser)
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

    addUser(user)
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
