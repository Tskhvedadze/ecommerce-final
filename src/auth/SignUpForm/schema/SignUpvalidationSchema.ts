import * as Yup from 'yup'

export const validationSchema = (t: any) =>
    Yup.object().shape({
        email: Yup.string()
            .email(t('invalid_email'))
            .required(t('email_is_required')),
        firstName: Yup.string()
            .min(2, t('short'))
            .max(50, t('long'))
            .required(t('name_required')),
        lastName: Yup.string()
            .min(2, t('short'))
            .max(50, t('long'))
            .required(t('last_name_required')),
        phoneNumber: Yup.string()
            .matches(/^\+[\d-]+$/, t('invalid_number'))
            .required(t('number_required')),
        password: Yup.string().required(t('password_is_required')),
        consfirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], t('Password_not_match'))
            .required(t('Confirm_password_required')),
    })
