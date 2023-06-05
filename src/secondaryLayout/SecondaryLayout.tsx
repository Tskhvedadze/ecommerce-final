import { Outlet } from 'react-router-dom'

import Header from './Header/Header'
import Footer from './Footer/Footer'

import { SecondaryContentLayout } from './SecondaryLayout.styled'

function SecondaryLayout() {
    return (
        <SecondaryContentLayout>
            <Header />
            <Outlet />
            <Footer />
        </SecondaryContentLayout>
    )
}

export default SecondaryLayout
