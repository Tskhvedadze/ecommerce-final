import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ReactComponent as Facebook } from 'assets/images/facebook.svg'
import { ReactComponent as Instagram } from 'assets/images/instagram.svg'
import { ReactComponent as Twitter } from 'assets/images/twitter.svg'
import { ReactComponent as Github } from 'assets/images/Github.svg'

import { FooterContent, StyledFlexContainer } from './Footer.styled'

function Footer() {
    const { t } = useTranslation(['footer'])

    return (
        <FooterContent>
            <StyledFlexContainer>
                <span> {t('Reserved')}</span>
                <div>
                    <Link to={'#'}>
                        <Facebook />
                        <span>Facebook page</span>
                    </Link>
                    <Link to={'#'}>
                        <Instagram />
                        <span>Instagram page</span>
                    </Link>
                    <Link to={'#'}>
                        <Twitter />
                        <span>Twitter page</span>
                    </Link>
                    <Link to={'#'}>
                        <Github />
                        <span>GitHub account</span>
                    </Link>
                </div>
            </StyledFlexContainer>
        </FooterContent>
    )
}

export default Footer
