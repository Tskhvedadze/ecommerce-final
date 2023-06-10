import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useContactFormContext } from 'context'
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik'
import { validationSchema } from 'pages/Contact/schema/validationSchema'

import { TInitialValues } from 'context/ContactFormContext/ContactFormContext'

import {
    EmailInput,
    SubjectInput,
    TextArea,
    Label,
    SForm,
    MessageFieldContainer,
    ButtonContainer,
    FormButton,
} from './ContactForm.styled'

export const ContactForm = () => {
    const { t } = useTranslation(['ContactPage'])
    const schema = validationSchema(t)
    const navigate = useNavigate()
    const { handleSubmit, initialValues } = useContactFormContext()

    const handle = (
        values: TInitialValues,
        { resetForm }: FormikHelpers<TInitialValues>,
    ) => {
        handleSubmit(values)
        resetForm()
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handle}
            validationSchema={schema}
        >
            {({ errors, touched }) => (
                <SForm>
                    <div>
                        {errors.email && touched.email ? (
                            <ErrorMessage
                                name='email'
                                component='span'
                                className='block mb-2 text-sm font-medium text-red-400'
                            />
                        ) : (
                            <Label htmlFor='email'>{t('email')}</Label>
                        )}
                        <Field
                            type='email'
                            id='email'
                            name='email'
                            placeholder='example@gmail.com'
                            as={EmailInput}
                        />
                    </div>
                    <div>
                        {errors.subject && touched.subject ? (
                            <ErrorMessage
                                name='subject'
                                component='span'
                                className='block mb-2 text-sm font-medium text-red-400'
                            />
                        ) : (
                            <Label htmlFor='subject'>{t('Subject')}</Label>
                        )}
                        <Field
                            type='text'
                            id='subject'
                            name='subject'
                            placeholder={`${t('placeholder_1')}`}
                            as={SubjectInput}
                        />
                    </div>
                    <MessageFieldContainer>
                        <Label htmlFor='message'>{t('message')}</Label>
                        <Field
                            id='message'
                            name='message'
                            placeholder={`${t('placeholder_2')}`}
                            as={TextArea}
                        ></Field>
                    </MessageFieldContainer>
                    <ButtonContainer>
                        <FormButton type='submit'>
                            {t('Send_message')}
                        </FormButton>
                        <FormButton type='button' onClick={() => navigate('/')}>
                            {t('Home')}
                        </FormButton>
                    </ButtonContainer>
                </SForm>
            )}
        </Formik>
    )
}
