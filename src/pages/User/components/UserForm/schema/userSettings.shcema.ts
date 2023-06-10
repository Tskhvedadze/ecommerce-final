import * as Yup from 'yup'

export const userValidationSchema = (t: any) =>
    Yup.object().shape({
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
        email: Yup.string()
            .email(t('invalid_email'))
            .required(t('email_is_required')),
    })
