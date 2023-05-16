import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
    SEmailInput,
    SSubjectInput,
    STextArea,
    SLabel,
    SForm,
    SButtonContainer,
    SFormButton,
} from './ContactForm.styled'

type FormValues = {
    email: string
    subject: string
    message: string
}

export const ContactForm = () => {
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState<FormValues>({
        email: '',
        subject: '',
        message: '',
    })

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }))
    }

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formValues)
    }

    return (
        <SForm onSubmit={handleSubmit}>
            <div>
                <SLabel htmlFor='email'>Your email</SLabel>
                <SEmailInput
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
                <SLabel htmlFor='subject'>Subject</SLabel>
                <SSubjectInput
                    type='text'
                    id='subject'
                    name='subject'
                    placeholder='Let us know how we can help you'
                    required
                    value={formValues.subject}
                    onChange={handleInputChange}
                />
            </div>
            <div className='sm:col-span-2'>
                <SLabel htmlFor='message'>Your message</SLabel>
                <STextArea
                    id='message'
                    name='message'
                    placeholder='Leave a comment...'
                    value={formValues.message}
                    onChange={handleInputChange}
                ></STextArea>
            </div>
            <SButtonContainer>
                <SFormButton type='submit'>Send message</SFormButton>
                <SFormButton type='button' onClick={() => navigate('/')}>
                    Home Page
                </SFormButton>
            </SButtonContainer>
        </SForm>
    )
}
