import { Outlet } from 'react-router-dom'

import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

export default function MainLayout() {
    return (
        <div className='flex flex-col grow justify-between content-between min-w-[1000px]'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
