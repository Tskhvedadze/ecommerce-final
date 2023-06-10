import * as Yup from 'yup'

export const validationSchema = (t: any) =>
    Yup.object().shape({
        email: Yup.string().test(
            'email',
            t('email_required'),
            function (value) {
                if (this.parent.email === 'admin') {
                    return true // Skip validation
                }
                return Yup.string()
                    .email(t('email_required'))
                    .required(t('email_required'))
                    .isValidSync(value)
            },
        ),
        password: Yup.string().required(t('password_required')),
    })
