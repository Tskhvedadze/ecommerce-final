import { Outlet } from 'react-router-dom'
import { useSearchBarContext } from 'context'

import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

import { MainContainer, ContentLayout } from './MainLayout.styled'

function MainLayout() {
    const { setIsFocused } = useSearchBarContext()
    return (
        <MainContainer>
            <NavBar />
            <ContentLayout onClick={() => setIsFocused(false)}>
                <Outlet />
            </ContentLayout>
            <Footer />
        </MainContainer>
    )
}

export default MainLayout
