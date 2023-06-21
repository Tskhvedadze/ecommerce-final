import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Formik, Field, Form } from 'formik'
import { Spin, message } from 'antd'
import { private_axios } from 'utils/axios/private_axios'
import { TImages } from '../../../types/images.type'
import { TFormInitial } from '../../../types/form.types'

import {
  BrandLable,
  Btn,
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
  const queryClient = useQueryClient()
  const [isLoading, setIsLoading] = useState(false)

  const { mutateAsync } = useMutation(signUp)

  async function signUp(values: TFormInitial) {
    try {
      await private_axios.put(`/product/${formInitial.id}`, values)
      message.success(`${'successfully'}`)

      queryClient.invalidateQueries()
    } catch (error: any) {
      message.error(`${'error_occurred'}`)
    }
  }

  async function handleSubmit(values: TFormInitial) {
    const updatedValues = {
      ...values,
      images: imageList?.flatMap((item: TImages) => item.images),
    }
    setIsLoading(true)
    // Delay the execution using setTimeout
    await new Promise((resolve) => setTimeout(resolve, 3000))

    await mutateAsync(updatedValues)

    setIsLoading(false)
  }

  return (
    <Formik initialValues={formInitial} onSubmit={handleSubmit}>
      <Form>
        <FlexCol>
          <BrandLable htmlFor='brand'>Brand</BrandLable>
          <Field type='text' id='brand' name='brand' as={Input} />
        </FlexCol>
        <FlexCol>
          <Label htmlFor='title'>Model</Label>
          <Field type='text' id='title' name='title' as={Input} />
        </FlexCol>
        <FlexJustify>
          <FlexCol className='mr-2'>
            <Label htmlFor='amount'>Amount</Label>
            <Field type='text' id='amount' name='amount' as={Input} />
          </FlexCol>
          <FlexCol className='mr-2'>
            <Label htmlFor='rating'>Rating</Label>
            <Field type='text' id='rating' name='rating' as={Input} />
          </FlexCol>
          <FlexCol>
            <Label htmlFor='price'>Price</Label>
            <Field type='text' id='price' name='price' as={Input} />
          </FlexCol>
        </FlexJustify>
        <FlexCol>
          <Label htmlFor='category'>Category</Label>
          <Field type='text' id='category' name='category' as={Input} />
        </FlexCol>
        <FlexCol>
          <Label htmlFor='description'>Description</Label>
          <Field as={TextArea} id='description' name='description' />
        </FlexCol>
        <Btn type='submit'>
          {isLoading ? <Spin size='default' /> : `${'Submit'}`}
        </Btn>
      </Form>
    </Formik>
  )
}
