import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

import { SLayoutContainer } from './components'

export default function MainLayout() {
    return (
        <SLayoutContainer>
            <Header />
            <Outlet />
            <Footer />
        </SLayoutContainer>
    )
}
