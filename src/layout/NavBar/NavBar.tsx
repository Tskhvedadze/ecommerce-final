import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TAuthorizationStage, useAuthContext } from 'context'
import { useHandleLogout, getGreeting } from './helper/NavBarHelpers'

import { Cart, CartDrawer, UserDropdown, SearchBar } from './components'
import { LanguageSelect } from 'components'

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
  const { status, setStatus, data } = useAuthContext()
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
          <LanguageSelect status='warning' />
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
        <CartDrawer />
      </ContentLayout>
    </FlexLayout>
  )
}

export default NavBar
