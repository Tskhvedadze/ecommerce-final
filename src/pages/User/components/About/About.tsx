import { useTranslation } from 'react-i18next'

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
    const { t } = useTranslation(['userSettings'])

    return (
        <MainContainer>
            <AboutContainer>
                <AboutTitle>{t('User')}</AboutTitle>
            </AboutContainer>
            <DetailsContainer>
                <DetailsTitle>{t('name')}</DetailsTitle>
                <DetailsParagraph>{firstName}</DetailsParagraph>
            </DetailsContainer>
            <DetailsContainer>
                <DetailsTitle>{t('last_name')}</DetailsTitle>
                <DetailsParagraph>{lastName}</DetailsParagraph>
            </DetailsContainer>
            <DetailsContainer>
                <DetailsTitle>{t('No.')}</DetailsTitle>
                <DetailsParagraph>{phoneNumber}</DetailsParagraph>
            </DetailsContainer>
            <DetailsContainer>
                <DetailsTitle>{t('email')}</DetailsTitle>
                <DetailsParagraph>{email}</DetailsParagraph>
            </DetailsContainer>
        </MainContainer>
    )
}
