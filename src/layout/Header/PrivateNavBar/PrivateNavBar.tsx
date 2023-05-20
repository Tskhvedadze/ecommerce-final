import { useContext } from 'react'
import { ShoppingCartContext } from 'context'

import {
    SearchBar,
    LanguageSelector,
    ShoppingCart,
    ShoppingCartDropdown,
} from 'components'

import {
    FlexLayout,
    DivLayout,
    ContentLayout,
    LogoImage,
    StyledLink,
    LogoutButton,
    UserName,
    UserEmail,
    logoImage,
} from '../Header.styled'

type PrivateNavBarProps = {}

export const PrivateNavBar = (props: PrivateNavBarProps) => {
    const { isCartOpen } = useContext(ShoppingCartContext)

    return (
        <FlexLayout>
            <ContentLayout>
                <LogoImage src={logoImage} alt='logo' />
                <DivLayout>
                    <UserName>UserName</UserName>
                    <UserEmail>giorgi.cxvedadze4@gmail.com</UserEmail>
                </DivLayout>
            </ContentLayout>
            <ContentLayout>
                <DivLayout>
                    <StyledLink to='/'>Home</StyledLink>
                </DivLayout>
                <DivLayout>
                    <StyledLink to='contact-us'>Contact Us</StyledLink>
                </DivLayout>
            </ContentLayout>
            <SearchBar />
            <ContentLayout>
                <DivLayout>
                    <LanguageSelector />
                </DivLayout>
                <DivLayout>
                    <LogoutButton onClick={() => console.log('logout')}>
                        Log Out
                    </LogoutButton>
                </DivLayout>
                <ShoppingCart />
                {isCartOpen && <ShoppingCartDropdown />}
            </ContentLayout>
        </FlexLayout>
    )
}
