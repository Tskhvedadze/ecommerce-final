import { PropsWithChildren, useState, ChangeEvent, FormEvent } from 'react'

import { ContactFormContext } from 'context'
import { FormValueProps } from 'context/ContactFormContext/ContactFormContext'

const initialFormValues = {
    email: '',
    subject: '',
    message: '',
}

export const ContactFormProvider = ({ children }: PropsWithChildren) => {
    const [open, setOpen] = useState<boolean>(false)
    const [formValues, setFormValues] =
        useState<FormValueProps>(initialFormValues)

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setOpen(true)
    }

    const handleCancelModal = () => {
        setFormValues(initialFormValues)
        setOpen(false)
    }

    return (
        <ContactFormContext.Provider
            value={{
                open,
                formValues,
                setFormValues,
                handleCancelModal,
                handleInputChange,
                handleSubmit,
            }}
        >
            {children}
        </ContactFormContext.Provider>
    )
}
