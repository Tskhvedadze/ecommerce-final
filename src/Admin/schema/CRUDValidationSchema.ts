import * as Yup from 'yup'

export const validationSchema = (t: any) =>
  Yup.object().shape({
    brand: Yup.string().required(`${t('brand_required')}`),
    title: Yup.string().required(`${t('model_required')}`),
    amount: Yup.number()
      .typeError(`${t('amount_must_be')}`)
      .positive(`${t('amount_must_positive')}`)
      .required(`${t('amount_required')}`),
    rating: Yup.number()
      .typeError(`${t('rating_must_be')}`)
      .min(0, `${t('rating_at_least')}`)
      .max(5, `${t('rating_at_most')}`)
      .required(`${t('rating_required')}`),
    price: Yup.number()
      .typeError(`${t('price_must_be')}`)
      .positive(`${t('price_must_be_positive')}`)
      .required(`${t('price_required')}`),
    category: Yup.string().required(`${t('category_required')}`),
    description: Yup.string().required(`${t('description_required')}`),
  })
