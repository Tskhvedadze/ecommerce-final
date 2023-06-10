import { useTranslation } from 'react-i18next'
import { SignInForm } from '../../auth/SignInForm/SignInForm'

import {
    SignInSection,
    SignInFlexContainer,
    SignInContent,
    SignInInnerDiv,
    SignInTitle,
    SignInFooterContainer,
    SignInParagraph,
    SignInNavLink,
} from './SignIn.styled'

function SignIn() {
    const { t } = useTranslation(['SignIn'])

    return (
        <SignInSection>
            <SignInFlexContainer>
                <SignInContent>
                    <SignInInnerDiv>
                        <SignInTitle>{t('signIn')}</SignInTitle>
                        <SignInForm />
                        <SignInFooterContainer>
                            <SignInParagraph>{t('notHave')}</SignInParagraph>
                            <SignInNavLink to={'/signup'}>
                                {t('signUp')}
                            </SignInNavLink>
                        </SignInFooterContainer>
                    </SignInInnerDiv>
                </SignInContent>
            </SignInFlexContainer>
        </SignInSection>
    )
}

export default SignIn
