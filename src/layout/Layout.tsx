import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Footer } from './Footer/Footer'
import './Layout.css'

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app-container">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}
