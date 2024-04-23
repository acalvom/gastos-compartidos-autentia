import { Footer } from './footer/footer.component'
import { Header } from './header/header.component'
import './layout-base.styles.css'
import { Main } from './main/main.component'

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
