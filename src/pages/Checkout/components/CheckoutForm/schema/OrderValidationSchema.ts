import * as Yup from 'yup'

export const OrderValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    cardNumber: Yup.string().required('Required'),
    year: Yup.string().required('Required'),
    month: Yup.string().required('Required'),
    securityCode: Yup.string().required('Required'),
    cardName: Yup.string().required('Required'),
})
