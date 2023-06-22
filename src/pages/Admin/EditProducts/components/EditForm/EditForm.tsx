import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useTranslation } from 'react-i18next'
import { Formik, Field, Form } from 'formik'
import { Spin, message } from 'antd'
import { private_axios } from 'utils/axios/private_axios'

import { validationSchema } from '../../../Schema/CRUDValidationSchema'
import { TImages } from '../../../types/images.type'
import { TFormInitial } from '../../../types/form.types'

import {
  BrandError,
  BrandLable,
  Btn,
  ErrorMsg,
  FlexCol,
  FlexJustify,
  Input,
  Label,
  TextArea,
} from './EditForm.styled'

type EditFormProps = {
  imageList: TImages[]
} & TFormInitial

export const EditForm = ({ imageList, ...formInitial }: EditFormProps) => {
  const { t } = useTranslation(['Admin'])
  const queryClient = useQueryClient()
  const [loading, setLoading] = useState(false)

  const { mutateAsync } = useMutation(updateProduct)

  async function updateProduct(values: TFormInitial) {
    try {
      await private_axios.put(`/product/${formInitial.id}`, values)
      message.success(`${t('successfully')}`)

      queryClient.invalidateQueries()
    } catch (error: any) {
      message.error(`${t('error_occurred')}`)
    }
  }

  async function handleSubmit(values: TFormInitial) {
    const updatedValues = {
      ...values,
      images: imageList?.flatMap((item: TImages) => item.images),
    }
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    await mutateAsync(updatedValues)
    setLoading(false)
  }

  return (
    <Formik
      initialValues={formInitial}
      onSubmit={handleSubmit}
      validationSchema={validationSchema(t)}
    >
      {({ errors, touched }) => (
        <Form>
          <FlexCol>
            {errors.brand && touched.brand ? (
              <BrandError name='brand' component='span' />
            ) : (
              <BrandLable htmlFor='brand'>{t('brand')}</BrandLable>
            )}
            <Field
              type='text'
              id='brand'
              name='brand'
              as={Input}
              errors={errors.brand}
              touched={touched.brand}
            />
          </FlexCol>
          <FlexCol>
            {errors.title && touched.title ? (
              <ErrorMsg name='title' component='span' />
            ) : (
              <Label htmlFor='title'>{t('model')}</Label>
            )}
            <Field
              type='text'
              id='title'
              name='title'
              as={Input}
              errors={errors.title}
              touched={touched.title}
            />
          </FlexCol>
          <FlexJustify>
            <FlexCol className='mr-0 md:mr-2'>
              {errors.amount && touched.amount ? (
                <ErrorMsg name='amount' component='span' />
              ) : (
                <Label htmlFor='amount'>{t('amount')}</Label>
              )}
              <Field
                type='text'
                id='amount'
                name='amount'
                as={Input}
                errors={errors.amount}
                touched={touched.amount}
              />
            </FlexCol>
            <FlexCol className='mr-0 md:mr-2'>
              {errors.rating && touched.rating ? (
                <ErrorMsg name='rating' component='span' />
              ) : (
                <Label htmlFor='rating'>{t('rating')}</Label>
              )}
              <Field
                type='text'
                id='rating'
                name='rating'
                as={Input}
                errors={errors.rating}
                touched={touched.rating}
              />
            </FlexCol>
            <FlexCol>
              {errors.price && touched.price ? (
                <ErrorMsg name='price' component='span' />
              ) : (
                <Label htmlFor='price'>{t('price')}</Label>
              )}
              <Field
                type='text'
                id='price'
                name='price'
                as={Input}
                errors={errors.price}
                touched={touched.price}
              />
            </FlexCol>
          </FlexJustify>
          <FlexCol>
            {errors.category && touched.category ? (
              <ErrorMsg name='category' component='span' />
            ) : (
              <Label htmlFor='category'>{t('category')}</Label>
            )}
            <Field
              type='text'
              id='category'
              name='category'
              as={Input}
              errors={errors.category}
              touched={touched.category}
            />
          </FlexCol>
          <FlexCol>
            {errors.description && touched.description ? (
              <ErrorMsg name='description' component='span' />
            ) : (
              <Label htmlFor='description'>{t('description')}</Label>
            )}
            <Field
              id='description'
              name='description'
              as={TextArea}
              errors={errors.description}
              touched={touched.description}
            />
          </FlexCol>
          <Btn type='submit'>
            {loading ? <Spin size='default' /> : `${t('save')}`}
          </Btn>
        </Form>
      )}
    </Formik>
  )
}
