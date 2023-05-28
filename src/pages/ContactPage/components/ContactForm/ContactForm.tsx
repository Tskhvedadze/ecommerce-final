import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ContactFormContext } from 'context'

import {
    EmailInput,
    SubjectInput,
    TextArea,
    Label,
    Form,
    MessageFieldContainer,
    ButtonContainer,
    FormButton,
} from './ContactForm.styled'

export const ContactForm = () => {
    const { t } = useTranslation(['ContactPage'])
    const navigate = useNavigate()
    const {
        formValues,
        handleInputChange,
        handleSubmit,
        formErrors,
        formTouched,
    } = useContext(ContactFormContext)

    const emailError = formTouched.email && formErrors.email
    const subjectError = formTouched.subject && formErrors.subject

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <div className='relative'>
                    <Label htmlFor='email'>{t('email')}</Label>
                    <EmailInput
                        type='email'
                        id='email'
                        name='email'
                        placeholder='example@gmail.com'
                        value={formValues.email}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                        hasError={!!emailError}
                    />
                    {emailError && (
                        <p className='absolute text-red-600 text-sm'>
                            {emailError}
                        </p>
                    )}
                </div>
                <div className='relative'>
                    <Label htmlFor='subject'>{t('Subject')}</Label>
                    <SubjectInput
                        type='text'
                        id='subject'
                        name='subject'
                        placeholder={`${t('placeholder_1')}`}
                        value={formValues.subject}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                        hasError={!!subjectError}
                    />
                    {subjectError && (
                        <p className='absolute text-red-600 text-sm'>
                            {subjectError}
                        </p>
                    )}
                </div>
                <MessageFieldContainer>
                    <Label htmlFor='message'>{t('message')}</Label>
                    <TextArea
                        id='message'
                        name='message'
                        placeholder={`${t('placeholder_2')}`}
                        value={formValues.message}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                    ></TextArea>
                </MessageFieldContainer>
                <ButtonContainer>
                    <FormButton type='submit'>{t('Send_message')}</FormButton>
                    <FormButton type='button' onClick={() => navigate('/')}>
                        {t('Home')}
                    </FormButton>
                </ButtonContainer>
            </Form>
        </>
    )
}
