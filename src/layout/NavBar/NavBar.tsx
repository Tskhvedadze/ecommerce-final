import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useCartContext } from 'context'
import { TAuthorizationStage, useAuthContext } from 'context'
import {
    useHandleLogout,
    getGreeting,
    useUserDataQuery,
} from './helper/NavBarHelpers'

import { Cart, CartDropdown, UserDropdown } from './components'
import { SearchBar } from 'pages/Search/components'
import { LanguageSwitcher } from 'components'

import {
    FlexLayout,
    DivLayout,
    ContentLayout,
    StyledLink,
    Greeting,
    AuthContainer,
} from './NavBar.styled'

import amazon from 'assets/images/amazon.png'

function NavBar() {
    const { t } = useTranslation(['navbar'])
    const { isCartOpen } = useCartContext()
    const { status, setStatus } = useAuthContext()
    const { data } = useUserDataQuery(status)
    const handleLogout = useHandleLogout(setStatus)
    const greeting = getGreeting(data)

    return (
        <FlexLayout>
            <ContentLayout>
                <Link to={'/'}>
                    <img width={90} height={35} src={amazon} alt='eshop' />
                </Link>
            </ContentLayout>

            <ContentLayout>
                <DivLayout>
                    <Greeting>
                        {t('hello')}
                        {greeting}
                    </Greeting>
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
                    <AuthContainer>
                        {status === TAuthorizationStage.AUTHORIZED ? (
                            <UserDropdown handleLogout={handleLogout} />
                        ) : (
                            <>
                                <StyledLink to='SignIn'>{t('in')}</StyledLink>
                                <StyledLink to='SignUp'>{t('up')}</StyledLink>
                            </>
                        )}
                    </AuthContainer>
                </DivLayout>
                <Cart />
                {isCartOpen && <CartDropdown />}
            </ContentLayout>
        </FlexLayout>
    )
}

export default NavBar
