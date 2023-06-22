import { Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import { Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { TImages } from 'pages/Admin/types/images.type'

import {
  ImagesGridContainer,
  ImageContainer,
  AntdBtn,
  DeleteIcon,
  AntdImg,
} from './ImageUploader.styled'

type ImageUploaderProps = {
  imageList: TImages[]
  setImageList: Dispatch<SetStateAction<TImages[]>>
}

export const ImageUploader = ({
  imageList,
  setImageList,
}: ImageUploaderProps) => {
  const { t } = useTranslation(['Admin'])

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

  return (
    <>
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
    </>
  )
}
