import { PropsWithChildren, useState } from 'react'
import { useFormik } from 'formik'

import {
    ContactFormContext,
    FormValueProps,
} from 'context/ContactFormContext/ContactFormContext'
import { useValidationSchema } from 'pages/ContactPage/hook/useValidationSchema'

const initialFormValues: FormValueProps = {
    email: '',
    subject: '',
    message: '',
}

export const ContactFormProvider = ({ children }: PropsWithChildren) => {
    const [open, setOpen] = useState<boolean>(false)

    const handleCancelModal = () => {
        formik.resetForm()
        setOpen(false)
    }

    const handleSubmit = (values: FormValueProps) => {
        setOpen(true)
        formik.setValues(values)
    }

    const validationSchema = useValidationSchema()

    const formik = useFormik({
        initialValues: initialFormValues,
        validationSchema,
        onSubmit: handleSubmit,
    })

    return (
        <ContactFormContext.Provider
            value={{
                open,
                formValues: formik.values as FormValueProps,
                setFormValues: formik.setValues,
                handleCancelModal,
                formErrors: formik.errors,
                formTouched: formik.touched,
                handleInputChange: formik.handleChange,
                handleSubmit: formik.handleSubmit,
            }}
        >
            {children}
        </ContactFormContext.Provider>
    )
}
