import { useContext } from 'react'
import { ContactFormContext } from 'context'
import { useTranslation } from 'react-i18next'

import { ContactForm } from './components/ContactForm/ContactForm'
import { ModalComponent } from 'components'

import {
    ContactSection,
    ContentContainer,
    Title,
    Paragraph,
} from './Contact.styled'

export default function ContactPage() {
    const { t } = useTranslation(['ContactPage'])
    const { formValues, open, handleCancelModal } =
        useContext(ContactFormContext)

    return (
        <>
            <ModalComponent
                title={`${t('Feedback_Sent')}`}
                message={formValues.message}
                subject={formValues.subject}
                email={formValues.email}
                open={open}
                handleCancelModal={handleCancelModal}
            />
            <ContactSection>
                <ContentContainer>
                    <Title>{t('Contact_Us')}</Title>
                    <Paragraph>{t('send_feedback')}</Paragraph>
                    <ContactForm />
                </ContentContainer>
            </ContactSection>
        </>
    )
}
