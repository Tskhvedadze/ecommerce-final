import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

export default function MainLayout() {
    return (
        <Fragment>
            <Header />
            <Outlet />
            <Footer />
        </Fragment>
    )
}
