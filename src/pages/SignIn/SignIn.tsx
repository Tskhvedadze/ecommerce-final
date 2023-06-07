import { useTranslation } from 'react-i18next'
import { SignInForm } from './components'

import {
    StyledSection,
    FlexContainer,
    ContentDiv,
    InnerDiv,
    StyledTitle,
    FooterContainer,
    StyledParagraph,
    StyledNavLink,
} from './SignIn.styled'

function SignIn() {
    const { t } = useTranslation(['SignIn'])

    return (
        <StyledSection>
            <FlexContainer>
                <ContentDiv>
                    <InnerDiv>
                        <StyledTitle>{t('signIn')}</StyledTitle>
                        <SignInForm />
                        <FooterContainer>
                            <StyledParagraph>{t('notHave')}</StyledParagraph>
                            <StyledNavLink to={'/signup'}>
                                {t('signUp')}
                            </StyledNavLink>
                        </FooterContainer>
                    </InnerDiv>
                </ContentDiv>
            </FlexContainer>
        </StyledSection>
    )
}

export default SignIn
