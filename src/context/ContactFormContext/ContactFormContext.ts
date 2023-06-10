import { createContext, useContext } from 'react'

export type TInitialValues = {
    message: string
    subject: string
    email: string
}

type ContactFormContextProps = {
    initialValues: TInitialValues
    open: boolean
    handleCancelModal: () => void
    handleSubmit: ({ message, subject, email }: TInitialValues) => void
}

export const ContactFormContext = createContext<ContactFormContextProps>({
    initialValues: {
        email: '',
        subject: '',
        message: '',
    },
    open: false,
    handleCancelModal: () => {},
    handleSubmit: () => {},
})

export const useContactFormContext = () => {
    return useContext(ContactFormContext)
}
