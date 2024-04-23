import { CreateExpense } from '@/pages/CreateExpense/CreateExpense'
import { CreateUser } from '@/pages/CreateUser/CreateUser'
import { Home } from '@/pages/Home/Home'
import { NotFound } from '@/pages/NotFound/NotFound'
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
