import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQueryClient } from 'react-query'
import { message } from 'antd'
import { CRUDForm, ImageUploader } from '../components'
import { private_axios } from 'utils/axios/private_axios'
import { TFormInitial } from '../types/form.types'
import { TImages } from '../types/images.type'

import {
  MainContainer,
  CreateFormContainer,
  UploadContainer,
} from './CreateProducts.styled'

function CreateProducts() {
  const { t } = useTranslation(['Admin'])
  const queryClient = useQueryClient()
  const [imageList, setImageList] = useState<TImages[]>([])

  async function createProduct(values: TFormInitial) {
    try {
      await private_axios.post('/product', values)
      message.success(`${t('successfully_create')}`)

      queryClient.invalidateQueries()
    } catch (error: any) {
      message.error(`${t('error_occurred_create')}`)
    }
  }

  const initialValues: TFormInitial = {
    title: '',
    brand: '',
    category: '',
    description: '',
    price: '',
    amount: '',
    rating: '',
  }

  return (
    <MainContainer>
      <CreateFormContainer>
        <CRUDForm
          imageList={imageList}
          formInitial={initialValues}
          CRUDProduct={createProduct}
          resetValues={true}
          setImageList={setImageList}
        />
      </CreateFormContainer>
      <UploadContainer>
        <ImageUploader imageList={imageList} setImageList={setImageList} />
      </UploadContainer>
    </MainContainer>
  )
}

export default CreateProducts
