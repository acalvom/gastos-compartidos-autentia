import './Main.css'

type MainProps = {
  children: JSX.Element | JSX.Element[]
}

export const Main = ({ children }: MainProps) => {
  return <main className="app-main">{children}</main>
}

export default Main
