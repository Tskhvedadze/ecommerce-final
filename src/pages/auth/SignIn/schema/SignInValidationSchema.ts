import * as Yup from 'yup'

export const validationSchema = (t: any) =>
    Yup.object().shape({
        email: Yup.string()
            .email(t('invalid_email'))
            .required(t('email_required')),
        password: Yup.string().required(t('password_required')),
    })
