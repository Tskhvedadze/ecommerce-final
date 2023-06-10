import * as Yup from 'yup'

export const validationSchema = (t: any) => {
    return Yup.object().shape({
        email: Yup.string()
            .email(`${t('email_invalid')}`)
            .required(`${t('email_required')}`),
        subject: Yup.string().required(`${t('subject_required')}`),
    })
}
