import { createContext, ChangeEvent, FormEvent } from 'react'

export type FormValueProps = {
    email: string
    subject: string
    message: string
}

export type FormErrorsProps = {
    email?: string
    subject?: string
    message?: string
}

export type FormTouchedProps = {
    email?: boolean
    subject?: boolean
    message?: boolean
}

type ContactFormContextProps = {
    open: boolean
    formValues: FormValueProps
    formErrors: FormErrorsProps
    formTouched: FormTouchedProps
    handleCancelModal: () => void
    setFormValues: (values: FormValueProps) => void
    handleInputChange: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const ContactFormContext = createContext<ContactFormContextProps>({
    open: false,
    formValues: {
        email: '',
        subject: '',
        message: '',
    },
    formErrors: {},
    formTouched: {},
    handleCancelModal: () => {},
    setFormValues: () => {},
    handleInputChange: () => {},
    handleSubmit: () => {},
})
