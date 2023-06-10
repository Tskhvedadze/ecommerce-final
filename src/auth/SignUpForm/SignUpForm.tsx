import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Formik, Form, Field } from 'formik'
import { validationSchema } from './schema/SignUpvalidationSchema'
import { public_axios } from 'utils'

import { message } from 'antd'
import { Button, Label, Input } from 'components'

import { ErrorMsg, FlexCol, FlexRow } from './SignUpForm.styled'

type TSignUp = {
    email: string
    firstName: string
    lastName: string
    phoneNumber: string
    password: string
    consfirmPassword?: string
}

const initialValues: TSignUp = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    consfirmPassword: '',
}

export const SignUpForm = () => {
    const { t } = useTranslation(['SignUp'])
    const navigate = useNavigate()
    const TranslatedSchema = () => validationSchema(t)
    const { mutateAsync } = useMutation(signUp)

    async function signUp(values: TSignUp) {
        try {
            await public_axios.post('/register', values)
            message.success('Account created successfully')
            navigate('/SignIn')
        } catch (error: any) {
            message.error(error?.response?.data)
        }
    }

    async function handleSubmit(values: TSignUp) {
        await mutateAsync(values)
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={TranslatedSchema}
        >
            {({ errors, touched }) => (
                <Form className='space-y-4 md:space-y-6'>
                    <FlexCol>
                        <FlexRow>
                            {errors.firstName && touched.firstName ? (
                                <ErrorMsg name='firstName' component='span' />
                            ) : (
                                <Label htmlFor='firstName'>{t('name')}</Label>
                            )}
                            {errors.lastName && touched.lastName ? (
                                <ErrorMsg name='lastName' component='span' />
                            ) : (
                                <Label htmlFor='lastName'>
                                    {t('lastname')}
                                </Label>
                            )}
                        </FlexRow>
                        <FlexRow>
                            <Field
                                type='text'
                                name='firstName'
                                id='firstName'
                                placeholder={`${t('name')}`}
                                as={Input}
                            />
                            <hr className='mr-2' />
                            <Field
                                type='text'
                                name='lastName'
                                id='lastName'
                                placeholder={`${t('lastname')}`}
                                as={Input}
                            />
                        </FlexRow>
                    </FlexCol>
                    <div>
                        {errors.phoneNumber && touched.phoneNumber ? (
                            <ErrorMsg name='phoneNumber' component='span' />
                        ) : (
                            <Label htmlFor='phoneNumber'>{t('phone')}</Label>
                        )}
                        <Field
                            type='text'
                            name='phoneNumber'
                            id='phoneNumber'
                            placeholder={`${t('phone')}`}
                            as={Input}
                        />
                    </div>
                    <div>
                        {errors.email && touched.email ? (
                            <ErrorMsg name='email' component='span' />
                        ) : (
                            <Label htmlFor='email'>{t('email')}</Label>
                        )}
                        <Field
                            type='email'
                            name='email'
                            id='email'
                            placeholder={`${t('email')}`}
                            as={Input}
                        />
                    </div>
                    <div>
                        {errors.password && touched.password ? (
                            <ErrorMsg name='password' component='span' />
                        ) : (
                            <Label htmlFor='password'>{t('password')}</Label>
                        )}
                        <Field
                            type='password'
                            name='password'
                            id='password'
                            placeholder='••••••••'
                            as={Input}
                        />
                    </div>
                    <div>
                        {errors.consfirmPassword && touched.consfirmPassword ? (
                            <ErrorMsg
                                name='consfirmPassword'
                                component='span'
                            />
                        ) : (
                            <Label htmlFor='consfirmPassword'>
                                {t('confirmPassword')}
                            </Label>
                        )}
                        <Field
                            type='password'
                            name='consfirmPassword'
                            id='consfirmPassword'
                            placeholder='••••••••'
                            as={Input}
                        />
                    </div>
                    <Button mode='form' type='submit'>
                        {t('create')}
                    </Button>
                </Form>
            )}
        </Formik>
    )
}
