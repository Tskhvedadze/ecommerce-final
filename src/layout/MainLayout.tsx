import { Outlet } from 'react-router-dom'
import { useSearchBarContext } from 'context'

import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

import { ContentLayout } from './MainLayout.styled'

function MainLayout() {
    const { setIsFocused, isFocused } = useSearchBarContext()

    return (
        <>
            {isFocused && (
                <div
                    className='fixed w-full h-full bg-gray-800 opacity-[0.8] z-40'
                    onMouseDown={() => setIsFocused(false)}
                />
            )}
            <NavBar />
            <ContentLayout>
                <Outlet />
            </ContentLayout>
            <Footer />
        </>
    )
}

export default MainLayout
