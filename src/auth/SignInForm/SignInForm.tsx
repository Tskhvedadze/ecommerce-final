import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useTranslation } from 'react-i18next'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { validationSchema } from './schema/SignInValidationSchema'
import { TAuthorizationStage, useAuthContext } from 'context'

import { public_axios } from 'utils'
import { TLocalStorage } from 'types/localestorage'

import { message } from 'antd'
import { Button, Label, Input } from 'components'

type TSignIn = {
    email: string
    password: string
}

export const SignInForm = () => {
    const { t } = useTranslation(['SignIn'])
    const schema = validationSchema(t)
    const navigate = useNavigate()
    const { setStatus } = useAuthContext()

    const { mutateAsync } = useMutation(
        'SignIn',
        async ({ email, password }: TSignIn) => {
            try {
                const res = await public_axios.post('/login', {
                    email,
                    password,
                })
                if (res.data.AccessToken) {
                    localStorage.setItem(
                        TLocalStorage.ACCESSTOKEN,
                        res.data.AccessToken,
                    )
                    setStatus(TAuthorizationStage.AUTHORIZED)
                }
                message.success('Welcome back!')
                navigate('/')
            } catch (error: any) {
                message.error('Email or password is incorrect')
            }
        },
    )

    const handleFormSubmit = async ({ email, password }: TSignIn) => {
        await mutateAsync({ email, password })
    }

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleFormSubmit}
            validationSchema={schema}
        >
            {({ errors, touched }) => (
                <Form className='space-y-4 md:space-y-6'>
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
                            type='text'
                            name='email'
                            id='email'
                            placeholder={`${t('pl_email')}`}
                            as={Input}
                        />
                    </div>
                    <div>
                        {errors.password && touched.password ? (
                            <ErrorMessage
                                name='password'
                                component='span'
                                className='block mb-2 text-sm font-medium text-red-400'
                            />
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
                    <Button mode='form' type='submit'>
                        {t('in')}
                    </Button>
                </Form>
            )}
        </Formik>
    )
}
