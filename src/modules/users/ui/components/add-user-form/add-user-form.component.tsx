import { UserFormErrors } from '@/models'
import { NewUser } from '@/modules/users/domain/new-user'
import { useAddUser } from '@/modules/users/ui/controllers/use-add-user.hook'
import { Common } from '@/shared/ui/texts/common-texts'
import { ChangeEvent, FormEvent, useState } from 'react'
import './add-user-form.styles.css'
import { InitialUser, UserFormTexts } from './add-user.constants'

export const AddUserForm = () => {
  const { addUser } = useAddUser()
  const [user, setUser] = useState<NewUser>(InitialUser)
  // ASKME: UserFormError debe ser un modelo (no entity) y ubicarse en add-form-user/add-form-user.models.ts ?
  const [errors, setErrors] = useState<UserFormErrors>(InitialUser)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const resetForm = () => setUser(InitialUser)
  const isValidForm = () => {
    const formErrors: UserFormErrors = {
      firstName: !user.firstName ? Common.FieldRequired : '',
      lastName: !user.lastName ? Common.FieldRequired : '',
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
          {errors.firstName && <span className="error">{errors.firstName}</span>}
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
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
      </div>
      <button className="button" type="submit" data-testid="add-user-button" disabled={isDisabled}>
        {UserFormTexts.Button}
      </button>
    </form>
  )
}
