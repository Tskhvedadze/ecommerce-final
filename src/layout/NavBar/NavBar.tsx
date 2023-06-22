import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TAuthorizationStage, useAuthContext } from 'context'

import { Cart, CartDrawer, Dropdown, SearchBar } from './components'
import { LanguageSelect } from 'components'

import {
  FlexLayout,
  DivLayout,
  ContentLayout,
  StyledLink,
  Greeting,
  AuthContainer,
  User,
  Guest,
} from './NavBar.styled'

import amazon from 'assets/images/amazon.png'

function NavBar() {
  const { t } = useTranslation(['navbar'])
  const { status, data } = useAuthContext()

  return (
    <FlexLayout>
      <ContentLayout>
        <Link to={'/'}>
          <img width={90} height={35} src={amazon} alt='amazon_logo' />
        </Link>
      </ContentLayout>

      <ContentLayout>
        <DivLayout>
          <Greeting>
            {t('hello')}
            {data ? <User>{data?.firstName}</User> : <Guest>Guest</Guest>}
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
              <Dropdown />
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
