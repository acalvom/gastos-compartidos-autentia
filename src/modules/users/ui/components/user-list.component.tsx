import { useListUsers } from './use-list-users.hook'

export const UserList = () => {
  // TODO: enhance styles
  const { users } = useListUsers()
  return (
    <div className="home-users">
      <h2 className="home-title">Usuarios</h2>
      <ul className="home-user-list">
        {users.map(({ firstName, lastName }) => (
          <li>
            {firstName} {lastName}
          </li>
        ))}
      </ul>
    </div>
  )
}
