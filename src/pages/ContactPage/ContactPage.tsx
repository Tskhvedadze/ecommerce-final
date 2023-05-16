import { ContactForm } from './components/ContactForm/ContactForm'

import {
    SSection,
    SContentContainer,
    STitle,
    SParagraph,
} from './Contact.styled'

type ContactProps = {}

export default function ContactPage(props: ContactProps) {
    return (
        <>
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
