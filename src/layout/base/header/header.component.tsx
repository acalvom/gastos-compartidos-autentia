import people from '@/assets/people.png'
import { NavigationLink } from '@/shared/ui/components/navigation-link/navigation-link.component'
import './header.styles.css'

export const Header = () => {
  return (
    <header className="app-header">
      <nav className="app-navbar">
        <div className="app-info">
          <img className="app-logo" data-testid="app-logo" src={people} alt="People" />
          <h1 className="app-title" data-testid="app-title">
            Gestión de gastos
          </h1>
        </div>
        <div className="app-links">
          <NavigationLink link="/create-user" testId="add-home-button">
            ➕ Usuario
          </NavigationLink>
          <NavigationLink link="/create-expense" testId="add-home-button">
            ➕ Gasto
          </NavigationLink>
        </div>
      </nav>
    </header>
  )
}
