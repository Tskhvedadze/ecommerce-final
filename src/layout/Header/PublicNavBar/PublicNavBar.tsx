import { LanguageSelector } from '../components/LanguageSelector/LanguageSelector'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart'

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
            </ContentLayout>
        </FlexLayout>
    )
}
