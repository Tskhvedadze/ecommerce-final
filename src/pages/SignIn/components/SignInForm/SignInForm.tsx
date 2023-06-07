import { useTranslation } from 'react-i18next'
import { Formik } from 'formik'

import { Button, Input, Label, Form } from 'components'

type SignInFormProps = {}

type TSignIn = {
    email: string
    password: string | number
}

const handleSubmit = (values: TSignIn) => {
    console.log(values)
}

export const SignInForm = (props: SignInFormProps) => {
    const { t } = useTranslation(['SignIn'])

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
        >
            <Form>
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
