import { Language } from '../components/Language/Language'
import { SearchField } from '../components/SearchField/SearchField'
import { Cart } from '../components/Cart/Cart'

import {
    SDivLayout,
    SFlexLayout,
    SContentLayout,
    SImage,
    SLink,
    logo,
} from '../HeaderStyled/Header.styled'

type PublicNavBarProps = {}

export const PublicNavBar = (props: PublicNavBarProps) => {
    return (
        <SFlexLayout>
            <SContentLayout>
                <SImage src={logo} alt='eshop' />
            </SContentLayout>

            <SContentLayout>
                <SDivLayout>
                    <SLink to='/'>Home</SLink>
                </SDivLayout>
                <SDivLayout>
                    <SLink to='contact-us'>Contact Us</SLink>
                </SDivLayout>
            </SContentLayout>
            <SearchField />
            <SContentLayout>
                <SDivLayout>
                    <Language />
                </SDivLayout>
                <SDivLayout>
                    <SLink to='login'>Log In</SLink>
                </SDivLayout>
                <SDivLayout>
                    <SLink to='register'>Register</SLink>
                </SDivLayout>
                <Cart />
            </SContentLayout>
        </SFlexLayout>
    )
}
