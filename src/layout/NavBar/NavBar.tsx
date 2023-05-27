import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { CartContext } from 'context'

import { Cart, SearchBar, CartDropdown, LanguageSwitcher } from './components'

import {
    FlexLayout,
    DivLayout,
    ContentLayout,
    StyledLink,
    StyledUser,
} from './NavBar.styled'

import amazon from 'assets/images/amazon.png'

type NavBarProps = {}

function NavBar(props: NavBarProps) {
    const { isCartOpen } = useContext(CartContext)

    return (
        <FlexLayout>
            <ContentLayout>
                <Link to={'/'}>
                    <img width={90} height={35} src={amazon} alt='eshop' />
                </Link>
            </ContentLayout>

            <ContentLayout>
                <DivLayout>
                    <StyledUser>User</StyledUser>
                </DivLayout>
                <DivLayout>
                    <StyledLink to='contact-us'>Contact Us</StyledLink>
                </DivLayout>
            </ContentLayout>
            <SearchBar />
            <ContentLayout>
                <DivLayout>
                    <LanguageSwitcher />
                </DivLayout>
                <DivLayout>
                    <StyledLink to='login'>Log In</StyledLink>
                </DivLayout>
                <DivLayout>
                    <StyledLink to='register'>Register</StyledLink>
                </DivLayout>
                <Cart />
                {isCartOpen && <CartDropdown />}
            </ContentLayout>
        </FlexLayout>
    )
}

export default NavBar
