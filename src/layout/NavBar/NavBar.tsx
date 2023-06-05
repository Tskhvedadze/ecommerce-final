import { useContext } from 'react'
import { CartContext } from 'context'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { Cart, SearchBar, CartDropdown } from './components'
import { LanguageSwitcher } from 'components'

import {
    FlexLayout,
    DivLayout,
    ContentLayout,
    StyledLink,
    StyledUser,
} from './NavBar.styled'

import amazon from 'assets/images/amazon.png'

function NavBar() {
    const { t } = useTranslation(['navbar'])
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
                    <StyledUser>{t('User')}</StyledUser>
                </DivLayout>
                <DivLayout>
                    <StyledLink to='contact-us'>{t('Contact_us')}</StyledLink>
                </DivLayout>
            </ContentLayout>
            <SearchBar />
            <ContentLayout>
                <DivLayout>
                    <LanguageSwitcher />
                </DivLayout>
                <DivLayout>
                    <StyledLink to='login'>{t('Log_in')}</StyledLink>
                </DivLayout>
                <DivLayout>
                    <StyledLink to='register'>{t('Register')}</StyledLink>
                </DivLayout>
                <Cart />
                {isCartOpen && <CartDropdown />}
            </ContentLayout>
        </FlexLayout>
    )
}

export default NavBar
