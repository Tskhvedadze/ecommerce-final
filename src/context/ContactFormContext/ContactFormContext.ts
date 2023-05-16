import { createContext, ChangeEvent, FormEvent } from 'react'

export type FormValueProps = {
    email: string
    subject: string
    message: string
}

type ContactFormContextProps = {
    open: boolean
    formValues: FormValueProps
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
    handleCancelModal: () => {},
    setFormValues: () => {},
    handleInputChange: () => {},
    handleSubmit: () => {},
})
