import { NavigationLink } from '@/shared/ui/components/navigation-link/navigation-link.component'
import { Common } from '@/shared/ui/texts/common-texts'
import { Layout } from '../base/layout-base.component'

type LayoutFormProps = {
  children: JSX.Element
}

export const LayoutForm = ({ children }: LayoutFormProps) => {
  return (
    <Layout>
      {children}
      <NavigationLink link="/" testId="add-home-button">
        {Common.BackButton}
      </NavigationLink>
    </Layout>
  )
}
