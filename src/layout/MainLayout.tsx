import { Outlet } from 'react-router-dom'
import { useSearchBarContext } from 'context'

import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

import { MainContainer, ContentLayout } from './MainLayout.styled'

function MainLayout() {
    const { setIsFocused, setText } = useSearchBarContext()
    const handleSearchReset = () => {
        setIsFocused(false)
        setText('')
    }

    return (
        <>
            <NavBar />
            <ContentLayout onClick={handleSearchReset}>
                <Outlet />
            </ContentLayout>
            <Footer />
        </>
    )
}

export default MainLayout
