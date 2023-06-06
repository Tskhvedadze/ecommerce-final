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
import { SignInForm } from './components'

function SignIn() {
    return (
        <StyledSection>
            <FlexContainer>
                <ContentDiv>
                    <InnerDiv>
                        <StyledTitle>Sign in to your account</StyledTitle>
                        <SignInForm />
                        <FooterContainer>
                            <StyledParagraph>
                                Don’t have an account yet?
                            </StyledParagraph>
                            <StyledNavLink to={'/register'}>
                                Sign up
                            </StyledNavLink>
                        </FooterContainer>
                    </InnerDiv>
                </ContentDiv>
            </FlexContainer>
        </StyledSection>
    )
}

export default SignIn
