import { Create } from '@/pages/Create/Create'
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
    key: 'create',
    path: '/create',
    element: <Create />,
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
