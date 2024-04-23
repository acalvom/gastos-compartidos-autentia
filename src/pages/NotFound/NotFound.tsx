import { NavigationLink } from '@/shared/ui/components/navigation-link/navigation-link.component'

import { Layout } from '@/layout/base/layout-base.component'
import './NotFound.css'

const NotFoundPage = {
  Title: '¡Ups!',
  Subtitle: 'Esta página no existe.',
  BackButton: '🥲 Llévame a casa',
}

export const NotFound = () => {
  return (
    <Layout>
      <div className="notFound-text-wrapper">
        <h1 className="notFound-title">{NotFoundPage.Title}</h1>
        <h2 className="notFound-subtitle">{NotFoundPage.Subtitle}</h2>
      </div>
      <NavigationLink link="/">{NotFoundPage.BackButton}</NavigationLink>
    </Layout>
  )
}
