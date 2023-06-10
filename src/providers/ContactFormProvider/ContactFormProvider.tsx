import { PropsWithChildren, useState } from 'react'
import {
    ContactFormContext,
    TInitialValues,
} from 'context/ContactFormContext/ContactFormContext'

export const ContactFormProvider = ({ children }: PropsWithChildren) => {
    const [open, setOpen] = useState(false)
    const [values, setValues] = useState({
        email: '',
        message: '',
        subject: '',
    })

    const handleCancelModal = () => {
        setOpen(false)
    }

    const handleSubmit = (formData: TInitialValues) => {
        setOpen(true)
        setValues(formData)
    }

    return (
        <ContactFormContext.Provider
            value={{
                initialValues: values,
                handleCancelModal,
                handleSubmit,
                open,
            }}
        >
            {children}
        </ContactFormContext.Provider>
    )
}
