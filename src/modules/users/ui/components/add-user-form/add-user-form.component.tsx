import { NewUser } from '@/modules/users/domain/new-user'
import { useAddUser } from '@/modules/users/ui/controllers/use-add-user.hook'
import { Common } from '@/shared/ui/texts/common-texts'
import { ChangeEvent, FormEvent, useState } from 'react'
import './add-user-form.styles.css'
import { InitialUser, UserFormTexts } from './add-user.constants'

interface UserFormErrors {
  errorFirstNameInput: string
  errorLastNameInput: string
}

export const AddUserForm = () => {
  const { addUser } = useAddUser()
  const [user, setUser] = useState<NewUser>(InitialUser)
  const [errors, setErrors] = useState<UserFormErrors>({
    errorFirstNameInput: '',
    errorLastNameInput: '',
  })
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const resetForm = () => setUser(InitialUser)
  const isValidForm = () => {
    const formErrors: UserFormErrors = {
      errorFirstNameInput: !user.firstName ? Common.FieldRequired : '',
      errorLastNameInput: !user.lastName ? Common.FieldRequired : '',
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
            placeholder={UserFormTexts.Name}
            value={user.firstName}
            onChange={handleOnChange}
          />
          {errors.errorFirstNameInput && (
            <span className="error">{errors.errorFirstNameInput}</span>
          )}
        </div>

        <div className="input-wrapper" data-testid="last-name-wrapper">
          <input
            className="input"
            type="text"
            id="lastName"
            placeholder={UserFormTexts.LastName}
            value={user.lastName}
            onChange={handleOnChange}
          />
          {errors.errorLastNameInput && <span className="error">{errors.errorLastNameInput}</span>}
        </div>
      </div>
      <button className="button" type="submit" data-testid="add-user-button" disabled={isDisabled}>
        {UserFormTexts.Button}
      </button>
    </form>
  )
}
