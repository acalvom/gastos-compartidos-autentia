import { Link } from 'react-router-dom'
import './navigation-link.styles.css'

interface NavigationLinkProps {
  children: React.ReactNode
  link: string
  testId?: string
}

export const NavigationLink = ({ children, link, testId }: NavigationLinkProps) => {
  return (
    <div className="app-link" data-testid={testId}>
      <Link to={link} className="button">
        {children}
      </Link>
    </div>
  )
}
