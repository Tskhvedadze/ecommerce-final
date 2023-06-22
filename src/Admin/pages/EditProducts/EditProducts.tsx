import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import { message } from 'antd'

import { ErrorMsg } from 'components'
import { CRUDForm, ImageUploader } from '../../components'
import { private_axios } from 'utils/axios/private_axios'
import { TFormInitial } from '../../types/form.types'
import { public_axios } from 'utils'
import { TImages } from '../../types/images.type'

import {
  EditFormContainer,
  MainContainer,
  UploadContainer,
} from './EditProducts.styled'

function EditProducts() {
  const { t } = useTranslation(['Admin'])
  const queryClient = useQueryClient()
  const { editID } = useParams()

  const { status, data, error, isError } = useQuery({
    queryKey: ['editProduct', editID],
    queryFn: async () => {
      const res = await public_axios.get(`/product/${editID}`)
      return res?.data
    },
    useErrorBoundary: (error: any) => error.response?.status >= 500,
  })

  const [imageList, setImageList] = useState<TImages[]>(
    data?.images.map((image: string) => ({ id: uuidv4(), images: [image] })),
  )

  async function updateProduct(values: TFormInitial) {
    try {
      await private_axios.put(`/product/${data?.id}`, values)
      message.success(`${t('successfully')}`)

      queryClient.invalidateQueries()
    } catch (error: any) {
      message.error(`${t('error_occurred')}`)
    }
  }

  if (status === 'error' && isError) {
    return <ErrorMsg errorText={error.message} />
  }

  return (
    <MainContainer>
      <EditFormContainer>
        <CRUDForm
          imageList={imageList}
          formInitial={data}
          CRUDProduct={updateProduct}
          text={`${t('save')}`}
        />
      </EditFormContainer>
      <UploadContainer>
        <ImageUploader imageList={imageList} setImageList={setImageList} />
      </UploadContainer>
    </MainContainer>
  )
}

export default EditProducts
