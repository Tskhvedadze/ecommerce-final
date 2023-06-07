import { useTranslation } from 'react-i18next'
import { SignUpForm } from './components/SignUpForm'

import {
    SignUpSection,
    SignUpFlexContainer,
    SignUpContent,
    SignUpInnerDiv,
    SignUpTitle,
    SignUpFooterContainer,
    SignUpParagraph,
    SignUpNavLink,
} from './SignUp.styled'

function SignUp() {
    const { t } = useTranslation(['SignUp'])

    return (
        <SignUpSection>
            <SignUpFlexContainer>
                <SignUpContent>
                    <SignUpInnerDiv>
                        <SignUpTitle>{t('create')}</SignUpTitle>
                        <SignUpForm />
                        <SignUpFooterContainer>
                            <SignUpParagraph>{t('already')}</SignUpParagraph>
                            <SignUpNavLink to={'/signin'}>
                                {t('login')}
                            </SignUpNavLink>
                        </SignUpFooterContainer>
                    </SignUpInnerDiv>
                </SignUpContent>
            </SignUpFlexContainer>
        </SignUpSection>
    )
}

export default SignUp
