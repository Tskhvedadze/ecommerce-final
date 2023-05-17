import { useContext } from 'react'
import { ContactFormContext } from 'context'

import { ContactForm } from './components/ContactForm/ContactForm'
import { ModalComponent } from 'components'

import {
    SSection,
    SContentContainer,
    STitle,
    SParagraph,
} from './Contact.styled'

export default function ContactPage() {
    const { formValues, open, handleCancelModal } =
        useContext(ContactFormContext)

    return (
        <>
            <ModalComponent
                title='FeedBack sent successfuly'
                message={formValues.message}
                subject={formValues.subject}
                email={formValues.email}
                open={open}
                handleCancelModal={handleCancelModal}
            />
            <SSection>
                <SContentContainer>
                    <STitle>Contact Us</STitle>
                    <SParagraph>
                        Got a technical issue? Want to send feedback about a
                        beta feature? Need details about our Business plan? Let
                        us know.
                    </SParagraph>
                    <ContactForm />
                </SContentContainer>
            </SSection>
        </>
    )
}
