import { useContactFormContext } from 'context'
import { useTranslation } from 'react-i18next'

import { ContactForm } from './components/ContactForm'
import { ModalComponent } from 'components'

import {
  ContactSection,
  ContentContainer,
  Title,
  Paragraph,
} from './Contact.styled'

export default function Contact() {
  const { t } = useTranslation(['ContactPage'])

  const {
    initialValues: { message, subject, email },
    open,
    handleCancelModal,
  } = useContactFormContext()

  return (
    <>
      <ModalComponent
        title={`${t('Feedback_Sent')}`}
        message={message}
        subject={subject}
        email={email}
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
