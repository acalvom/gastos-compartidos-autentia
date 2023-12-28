import './Layout.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

type LayoutProps = {
  children: JSX.Element[]
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

export default Layout
