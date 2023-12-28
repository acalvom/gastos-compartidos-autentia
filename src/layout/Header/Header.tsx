import people from '@/assets/people.png'
import './Header.css'

export const Header = () => {
  return (
    <header className="app-header">
      <nav className="app-navbar">
        <h1 className="app-title">Gestión de gastos</h1>
        <img className="app-logo" src={people} alt="People" />
      </nav>
    </header>
  )
}

export default Header