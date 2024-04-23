import { CreateExpense } from '@/pages/create-expense/create-expense.component'
import { CreateUser } from '@/pages/create-user/create-user.component'
import { Home } from '@/pages/home/home.component'
import { NotFound } from '@/pages/not-found/not-found.component'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const routes = [
  {
    key: 'home',
    path: '/',
    element: <Home />,
  },
  {
    key: 'create-user',
    path: '/create-user',
    element: <CreateUser />,
  },
  {
    key: 'create-expense',
    path: '/create-expense',
    element: <CreateExpense />,
  },
  {
    key: 'not-found',
    path: '/*',
    element: <NotFound />,
  },
]

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ key, path, element }) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
