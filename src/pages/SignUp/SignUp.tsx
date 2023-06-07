import { SignUpForm } from './components'

import {
    StyledSection,
    FlexContainer,
    ContentDiv,
    InnerDiv,
    StyledTitle,
    FooterContainer,
    StyledParagraph,
    StyledNavLink,
} from './SignUp.styled'

function SignIn() {
    return (
        <StyledSection>
            <FlexContainer>
                <ContentDiv>
                    <InnerDiv>
                        <StyledTitle>Create and account</StyledTitle>
                        <SignUpForm />
                        <FooterContainer>
                            <StyledParagraph>
                                Already have an account?{' '}
                            </StyledParagraph>
                            <StyledNavLink to={'/signin'}>
                                Login here
                            </StyledNavLink>
                        </FooterContainer>
                    </InnerDiv>
                </ContentDiv>
            </FlexContainer>
        </StyledSection>
    )
}

export default SignIn
