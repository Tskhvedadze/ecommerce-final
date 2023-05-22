import { Outlet } from 'react-router-dom'

import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

import { MainContainer, ContentLayout } from './MainLayout.styled'

function MainLayout() {
    return (
        <MainContainer>
            <NavBar />
            <ContentLayout>
                <Outlet />
            </ContentLayout>
            <Footer />
        </MainContainer>
    )
}

export default MainLayout
