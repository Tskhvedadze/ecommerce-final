import { useContext } from 'react'
import { ShoppingCartContext } from 'context'

import {
    LanguageSelector,
    SearchBar,
    ShoppingCart,
    ShoppingCartDropdown,
} from 'components'

import {
    FlexLayout,
    DivLayout,
    ContentLayout,
    LogoImage,
    StyledLink,
    logoImage,
} from '../Header.styled'

type PublicNavBarProps = {}

export const PublicNavBar = (props: PublicNavBarProps) => {
    const { isCartOpen } = useContext(ShoppingCartContext)

    return (
        <FlexLayout>
            <ContentLayout>
                <LogoImage src={logoImage} alt='eshop' />
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
                    <StyledLink to='login'>Log In</StyledLink>
                </DivLayout>
                <DivLayout>
                    <StyledLink to='register'>Register</StyledLink>
                </DivLayout>
                <ShoppingCart />
                {isCartOpen && <ShoppingCartDropdown />}
            </ContentLayout>
        </FlexLayout>
    )
}
