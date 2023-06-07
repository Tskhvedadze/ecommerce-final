import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'
import { Formik, Form } from 'formik'

import { Login } from 'config/api/api'

import { Button, Label, Input } from 'components'

type TSignIn = {
    email: string
    password: string
}

export const SignInForm = () => {
    const { t } = useTranslation(['SignIn'])

    const { isLoading, error, isError, mutateAsync, data } = useMutation(
        'login',
        Login,
    )

    console.log(data)

    // console.log(error)

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={async ({ email, password }: TSignIn) =>
                await mutateAsync({
                    email: email,
                    password: password,
                })
            }
        >
            <Form className='space-y-4 md:space-y-6'>
                <div>
                    <Label htmlFor='email'>{t('email')}</Label>
                    <Input
                        type='email'
                        name='email'
                        id='email'
                        placeholder={`${t('pl_email')}`}
                    />
                </div>
                <div>
                    <Label htmlFor='password'>{t('password')}</Label>
                    <Input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='••••••••'
                    />
                </div>
                <Button mode='form' type='submit'>
                    {t('in')}
                </Button>
            </Form>
        </Formik>
    )
}
