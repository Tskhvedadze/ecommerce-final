import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()
    const { handleSubmit, formValues, handleInputChange } =
        useContext(ContactFormContext)

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <Label htmlFor='email'>Your email</Label>
                <EmailInput
                    type='email'
                    id='email'
                    name='email'
                    placeholder='example@gmail.com'
                    required
                    value={formValues.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <Label htmlFor='subject'>Subject</Label>
                <SubjectInput
                    type='text'
                    id='subject'
                    name='subject'
                    placeholder='Let us know how we can help you'
                    required
                    value={formValues.subject}
                    onChange={handleInputChange}
                />
            </div>
            <MessageFieldContainer>
                <Label htmlFor='message'>Your message</Label>
                <TextArea
                    id='message'
                    name='message'
                    placeholder='Leave a comment...'
                    value={formValues.message}
                    onChange={handleInputChange}
                ></TextArea>
            </MessageFieldContainer>
            <ButtonContainer>
                <FormButton type='submit'>Send message</FormButton>
                <FormButton type='button' onClick={() => navigate('/')}>
                    Home Page
                </FormButton>
            </ButtonContainer>
        </Form>
    )
}
