import { useUserList } from '../../controllers/use-user-list.hook'
import './user-list.styles.css'

export const UserList = () => {
  const { users } = useUserList()
  return (
    <div className="home-users">
      <h2 className="home-title">👯 Usuarios</h2>
      <ul className="user-list">
        {users.map(({ firstName, lastName, id }) => (
          <li key={id}>
            {firstName} {lastName}
          </li>
        ))}
      </ul>
    </div>
  )
}
