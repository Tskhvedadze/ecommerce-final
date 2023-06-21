import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import { Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

import { ErrorMsg } from 'components'
import { EditForm } from './components'
import { public_axios } from 'utils'
import { TImages } from '../types/images.type'

import {
  AntdImg,
  DeleteIcon,
  EditFormContainer,
  ImageContainer,
  ImagesGridContainer,
  MainContainer,
  UploadContainer,
  AntdBtn,
} from './EditProducts.styled'

function EditProducts() {
  const { t } = useTranslation(['Admin'])
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

  const handleFileChange = (file: Blob) => {
    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const fileUrl = e.target?.result
      if (typeof fileUrl === 'string') {
        setImageList((prevImagesList) => [
          ...prevImagesList,
          { id: uuidv4(), images: [fileUrl] },
        ])
      }
    }
    reader.readAsDataURL(file)
  }

  const handleFileDelete = (id: string) => {
    const updatedList = imageList.filter((item: TImages) => item.id !== id)
    setImageList(updatedList)
  }

  if (status === 'error' && isError) {
    return <ErrorMsg errorText={error.message} />
  }

  return (
    <MainContainer>
      <EditFormContainer>
        <EditForm imageList={imageList} {...data} />
      </EditFormContainer>

      <UploadContainer>
        <ImagesGridContainer>
          {imageList.map((item: TImages) => (
            <ImageContainer key={item.id}>
              <AntdImg src={item.images[0]} width={100} height={100} />
              <DeleteIcon onClick={() => handleFileDelete(item.id)} />
            </ImageContainer>
          ))}
        </ImagesGridContainer>

        <Upload beforeUpload={handleFileChange} showUploadList={false}>
          <AntdBtn icon={<UploadOutlined />}>{t('select')}</AntdBtn>
        </Upload>
      </UploadContainer>
    </MainContainer>
  )
}

export default EditProducts
