import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'
import { CartContext, TAuthorizationStage, useAuthContext } from 'context'
import { private_axios } from 'utils/axios/private_axios'
import { TLocalStorage } from 'types/localestorage'

import { Button, LanguageSwitcher } from 'components'
import { Cart, SearchBar, CartDropdown } from './components'

import {
    FlexLayout,
    DivLayout,
    ContentLayout,
    StyledLink,
    StyledUser,
    AuthContainer,
} from './NavBar.styled'

import amazon from 'assets/images/amazon.png'

function NavBar() {
    const { t } = useTranslation(['navbar'])
    const { isCartOpen } = useContext(CartContext)
    const { status, setStatus } = useAuthContext()

    const { data } = useQuery(
        ['User', status],
        async () => {
            if (status === TAuthorizationStage.AUTHORIZED) {
                const res = await private_axios.get('/me')
                return res?.data
            }
            return null
        },
        {
            enabled: status === TAuthorizationStage.AUTHORIZED,
            cacheTime: 0,
        },
    )

    const handleLogout = () => {
        localStorage.removeItem(TLocalStorage.ACCESSTOKEN)
        setStatus(TAuthorizationStage.UNAUTHORIZED)
    }

    return (
        <FlexLayout>
            <ContentLayout>
                <Link to={'/'}>
                    <img width={90} height={35} src={amazon} alt='eshop' />
                </Link>
            </ContentLayout>

            <ContentLayout>
                <DivLayout>
                    <StyledUser>
                        {data && (
                            <span className=' text-amber-500 font-semibold'>
                                {data?.email}
                            </span>
                        )}
                    </StyledUser>
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
                            <Button
                                mode='secondary'
                                className=' rounded'
                                onClick={handleLogout}
                            >
                                Log Out
                            </Button>
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
