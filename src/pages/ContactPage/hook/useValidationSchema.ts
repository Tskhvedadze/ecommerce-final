import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

export const useValidationSchema = () => {
    const { t } = useTranslation(['ContactPage'])

    return Yup.object().shape({
        email: Yup.string()
            .email(`${t('email_invalid')}`)
            .required(`${t('email_required')}`),
        subject: Yup.string().required(`${t('subject_required')}`),
        message: Yup.string(),
    })
}
