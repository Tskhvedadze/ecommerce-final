import {
    MainContainer,
    AboutContainer,
    AboutTitle,
    DetailsContainer,
    DetailsTitle,
    DetailsParagraph,
} from './About.styled'

type AboutProps = {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
}

export const About = ({
    firstName,
    lastName,
    email,
    phoneNumber,
}: AboutProps) => {
    return (
        <MainContainer>
            <AboutContainer>
                <AboutTitle>ABOUT</AboutTitle>
            </AboutContainer>
            <DetailsContainer>
                <DetailsTitle>First Name</DetailsTitle>
                <DetailsParagraph>{firstName}</DetailsParagraph>
            </DetailsContainer>
            <DetailsContainer>
                <DetailsTitle>Last Name</DetailsTitle>
                <DetailsParagraph>{lastName}</DetailsParagraph>
            </DetailsContainer>
            <DetailsContainer>
                <DetailsTitle>Contact No.</DetailsTitle>
                <DetailsParagraph>{phoneNumber}</DetailsParagraph>
            </DetailsContainer>
            <DetailsContainer>
                <DetailsTitle>Email.</DetailsTitle>
                <DetailsParagraph>{email}</DetailsParagraph>
            </DetailsContainer>
        </MainContainer>
    )
}
