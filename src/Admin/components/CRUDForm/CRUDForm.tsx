import { SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useTranslation } from 'react-i18next'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { Spin } from 'antd'

import { validationSchema } from 'Admin/schema/CRUDValidationSchema'
import { TImages } from '../../types/images.type'
import { TFormInitial } from '../../types/form.types'

import {
  BrandError,
  BrandLable,
  Btn,
  BackBtn,
  BtnContainer,
  ErrorMsg,
  FlexCol,
  FlexJustify,
  Input,
  Label,
  TextArea,
} from './CRUDForm.styled'

type CRUDFormProps = {
  imageList: TImages[]
  formInitial: TFormInitial
  CRUDProduct: (values: TFormInitial) => Promise<void>
  resetValues?: boolean
  setImageList?: (value: SetStateAction<TImages[]>) => void
  text: string
}

export const CRUDForm = ({
  imageList,
  formInitial,
  CRUDProduct,
  resetValues,
  setImageList,
  text,
}: CRUDFormProps) => {
  const { t } = useTranslation(['Admin'])
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { mutateAsync } = useMutation(CRUDProduct)

  async function handleSubmit(
    values: TFormInitial,
    { resetForm }: FormikHelpers<TFormInitial>,
  ) {
    const updatedValues = {
      ...values,
      images: imageList?.flatMap((item: TImages) => item.images),
    }
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    await mutateAsync(updatedValues)
    setLoading(false)
    if (resetValues) {
      resetForm()
    }
    if (setImageList) {
      setImageList([])
    }
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
          <BtnContainer>
            <BackBtn onClick={() => navigate('/admin-panel')} type='button'>
              {t('back')}
            </BackBtn>
            <Btn type='submit'>{loading ? <Spin size='default' /> : text}</Btn>
          </BtnContainer>
        </Form>
      )}
    </Formik>
  )
}
