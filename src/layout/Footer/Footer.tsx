import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ReactComponent as Facebook } from 'assets/images/facebook.svg'
import { ReactComponent as Instagram } from 'assets/images/instagram.svg'
import { ReactComponent as Twitter } from 'assets/images/twitter.svg'
import { ReactComponent as Github } from 'assets/images/Github.svg'

import {
    FooterContent,
    StyledGridContainer,
    StyledLi,
    StyledHeading,
    StyledLink,
    StyledLine,
    StyledFlexContainer,
} from './Footer.styled'

function Footer() {
    const { t } = useTranslation(['footer'])

    return (
        <FooterContent>
            <StyledGridContainer>
                <div>
                    <StyledHeading>{t('Resources')}</StyledHeading>
                    <ul>
                        <StyledLi>
                            <StyledLink to='https://flowbite.com/'>
                                {t('Flowbite')}
                            </StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink to='https://tailwindcss.com/'>
                                {t('Tailwind')}
                            </StyledLink>
                        </StyledLi>
                    </ul>
                </div>
                <div>
                    <StyledHeading>{t('Follow')}</StyledHeading>
                    <ul>
                        <StyledLi>
                            <StyledLink to='https://github.com/themesberg/flowbite'>
                                {t('Github')}
                            </StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink to='https://discord.gg/4eeurUVvTy'>
                                {t('Discord')}
                            </StyledLink>
                        </StyledLi>
                    </ul>
                </div>
                <div>
                    <StyledHeading>{t('Legal')}</StyledHeading>
                    <ul>
                        <StyledLi>
                            <StyledLink to='https://www.changjiang750sidecar.com/pages/privacy-policy?gclid=CjwKCAjw9pGjBhB-EiwAa5jl3MdPm0cS8gso1-z7IaTo5sbd0e7Vze-Fu6DYrV5KXz-KI6hOeLzhwRoCAVEQAvD_BwE'>
                                {t('Policy')}
                            </StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink to='https://www.astartingpoint.com/static/tos.html?psafe_param=1&gclid=CjwKCAjw9pGjBhB-EiwAa5jl3MGVdvJMgPq7yjAt6J0Kb0-7y01SGJHoixJ_uf8q6ecXuK5TRr1icBoCwxEQAvD_BwE'>
                                {t('Terms')}
                            </StyledLink>
                        </StyledLi>
                    </ul>
                </div>
            </StyledGridContainer>
            <StyledLine />

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
