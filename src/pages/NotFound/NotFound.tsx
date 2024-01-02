import { NavigationLink } from '@/components/NavigationLink/NavigationLink'
import { NotFoundPage } from '@/constants'
import { Layout } from '@/layout/Layout'
import './NotFound.css'

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
