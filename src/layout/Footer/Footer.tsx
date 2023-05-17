import { Link } from 'react-router-dom'

import { MainContainer } from 'components/Containers'

import { ReactComponent as Facebook } from 'assets/images/facebook.svg'
import { ReactComponent as Instagram } from 'assets/images/instagram.svg'
import { ReactComponent as Twitter } from 'assets/images/twitter.svg'
import { ReactComponent as Github } from 'assets/images/Github.svg'

import {
    FooterContainer,
    FooterContent,
    StyledGridContainer,
    StyledLi,
    StyledHeading,
    StyledLink,
    StyledLine,
    StyledFlexContainer,
} from './Footer.styled'

export const Footer = () => {
    return (
        <MainContainer>
            <FooterContainer>
                <FooterContent>
                    <StyledGridContainer>
                        <div>
                            <StyledHeading>Resources</StyledHeading>
                            <ul>
                                <StyledLi>
                                    <StyledLink to='https://flowbite.com/'>
                                        Flowbite
                                    </StyledLink>
                                </StyledLi>
                                <StyledLi>
                                    <StyledLink to='https://tailwindcss.com/'>
                                        Tailwind CSS
                                    </StyledLink>
                                </StyledLi>
                            </ul>
                        </div>
                        <div>
                            <StyledHeading>Follow us</StyledHeading>
                            <ul>
                                <StyledLi>
                                    <StyledLink to='https://github.com/themesberg/flowbite'>
                                        Github
                                    </StyledLink>
                                </StyledLi>
                                <StyledLi>
                                    <StyledLink to='https://discord.gg/4eeurUVvTy'>
                                        Discord
                                    </StyledLink>
                                </StyledLi>
                            </ul>
                        </div>
                        <div>
                            <StyledHeading>Legal</StyledHeading>
                            <ul>
                                <StyledLi>
                                    <StyledLink to='https://www.changjiang750sidecar.com/pages/privacy-policy?gclid=CjwKCAjw9pGjBhB-EiwAa5jl3MdPm0cS8gso1-z7IaTo5sbd0e7Vze-Fu6DYrV5KXz-KI6hOeLzhwRoCAVEQAvD_BwE'>
                                        Privacy Policy
                                    </StyledLink>
                                </StyledLi>
                                <StyledLi>
                                    <StyledLink to='https://www.astartingpoint.com/static/tos.html?psafe_param=1&gclid=CjwKCAjw9pGjBhB-EiwAa5jl3MGVdvJMgPq7yjAt6J0Kb0-7y01SGJHoixJ_uf8q6ecXuK5TRr1icBoCwxEQAvD_BwE'>
                                        Terms &amp; Conditions
                                    </StyledLink>
                                </StyledLi>
                            </ul>
                        </div>
                    </StyledGridContainer>
                    <StyledLine />

                    <StyledFlexContainer>
                        <span>© 2023 All Rights Reserved.</span>
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
            </FooterContainer>
        </MainContainer>
    )
}
