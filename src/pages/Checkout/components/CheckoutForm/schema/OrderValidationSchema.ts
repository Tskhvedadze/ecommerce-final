import * as Yup from 'yup'

export const OrderValidationSchema = (t: any) =>
    Yup.object().shape({
        fullName: Yup.string().required(`${t('fullName_required')}`),
        email: Yup.string()
            .email(`${t(`email_invalid`)}`)
            .required(`${t('email_required')}`),
        cardNumber: Yup.string().required(`${t('cardNumber_required')}`),
        year: Yup.string().required(`${t('year_required')}`),
        month: Yup.string().required(`${t('month_required')}`),
        CVV: Yup.string().required(`${t('CVV_required')}`),
        cardName: Yup.string().required(`${t('cardName_required')}`),
    })
