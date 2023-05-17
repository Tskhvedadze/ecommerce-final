import { useContext } from 'react'
import { ContactFormContext } from 'context'

import { ContactForm } from './components/ContactForm/ContactForm'
import { ModalComponent } from 'components'

import {
    ContactSection,
    ContentContainer,
    Title,
    Paragraph,
} from './Contact.styled'

export default function ContactPage() {
    const { formValues, open, handleCancelModal } =
        useContext(ContactFormContext)

    return (
        <>
            <ModalComponent
                title='Feedback Sent Successfully'
                message={formValues.message}
                subject={formValues.subject}
                email={formValues.email}
                open={open}
                handleCancelModal={handleCancelModal}
            />
            <ContactSection>
                <ContentContainer>
                    <Title>Contact Us</Title>
                    <Paragraph>
                        Got a technical issue? Want to send feedback about a
                        beta feature? Need details about our Business plan? Let
                        us know.
                    </Paragraph>
                    <ContactForm />
                </ContentContainer>
            </ContactSection>
        </>
    )
}
