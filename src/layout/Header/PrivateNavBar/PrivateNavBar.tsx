import { SearchBar } from '../components/SearchBar/SearchBar'
import { LanguageSelector } from '../components/LanguageSelector/LanguageSelector'
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart'

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
            </ContentLayout>
        </FlexLayout>
    )
}
