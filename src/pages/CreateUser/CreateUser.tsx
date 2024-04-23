import { LayoutForm } from '@/layout/form/layout-form.component'
import { AddUserForm } from '@/modules/users/ui/components/add-user-form/add-user-form.component'

export const CreateUser = () => {
  return (
    <LayoutForm>
      <AddUserForm />
    </LayoutForm>
  )
}
