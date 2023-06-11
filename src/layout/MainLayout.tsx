import { Outlet } from 'react-router-dom'
import { useSearchBarContext } from 'context'

import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

import { ContentLayout, Overlay } from './MainLayout.styled'

function MainLayout() {
    const { setIsFocused, isFocused } = useSearchBarContext()

    return (
        <>
            {isFocused && <Overlay onMouseDown={() => setIsFocused(false)} />}
            <NavBar />
            <ContentLayout>
                <Outlet />
            </ContentLayout>
            <Footer />
        </>
    )
}

export default MainLayout
