import { Outlet } from 'react-router-dom'

import Header from './Header/Header'

import { SecondaryContentLayout } from './SecondaryLayout.styled'

function SecondaryLayout() {
  return (
    <SecondaryContentLayout>
      <Header />
      <Outlet />
    </SecondaryContentLayout>
  )
}

export default SecondaryLayout
