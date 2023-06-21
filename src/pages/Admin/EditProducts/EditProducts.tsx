import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Formik, Field, Form } from 'formik'
import { v4 as uuidv4 } from 'uuid'
import { ErrorMsg } from 'components'
import { public_axios } from 'utils'
import { useState } from 'react'
import { Button, Upload, Image, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { TrashIcon } from '@heroicons/react/24/solid'

type TInitialValues = {
  title: string
  brand: string
  model: string
  category: string
  description: string
  price: number
  amount: number
  rating: number
}

function EditProducts() {
  const { editID } = useParams()
  const { status, data, error, isError } = useQuery({
    queryKey: ['editProduct', editID],
    queryFn: async () => {
      const res = await public_axios.get(`/product/${editID}`)
      return res?.data
    },
    useErrorBoundary: (error: any) => error.response?.status >= 500,
  })

  const [fileList, setFileList] = useState(
    data?.images.map((images: string) => ({ id: uuidv4(), images })) || [],
  )

  const initialValues: TInitialValues = {
    title: data?.title,
    brand: data?.brand,
    model: data?.title,
    category: data?.category,
    description: data?.description,
    price: data?.price,
    amount: data?.amount,
    rating: data?.rating,
  }

  const handleFileChange = (file: Blob) => {
    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const fileUrl = e.target?.result

      setFileList((prevFileList: any) => [
        ...prevFileList,
        { id: uuidv4(), images: fileUrl },
      ])
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = (values: TInitialValues) => {
    const updatedValues = {
      ...values,
      images: fileList.map((item: any) => item.images),
    }
    console.log(updatedValues)

    // Perform the form submission with updatedValues
  }

  const handleFileDelete = (fileUrl: string) => {
    const updatedList = fileList.filter((file: string) => file !== fileUrl)

    setFileList(updatedList)
  }

  if (status === 'error' && isError) {
    return <ErrorMsg errorText={error.message} />
  }

  return (
    <div className='flex flex-col-reverse items-center lg:items-start w-full lg:w-[90%] justify-between lg:flex-row lg:pt-8 py-6 gap-5'>
      <div className='w-[90%] lg:w-[50%]'>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <div className='flex flex-col'>
              <label
                htmlFor='brand'
                className='mb-2 font-medium text-gray-900 dark:text-white'
              >
                Brand
              </label>
              <Field
                className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                type='text'
                id='brand'
                name='brand'
              />
            </div>
            <div className='flex flex-col'>
              <label
                className=' my-2 font-medium text-gray-900 dark:text-white'
                htmlFor='title'
              >
                Model
              </label>
              <Field
                className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                type='text'
                id='title'
                name='title'
              />
            </div>
            <div className='flex justify-between'>
              <div className='flex flex-col mr-2'>
                <label
                  className=' my-2  font-medium text-gray-900 dark:text-white'
                  htmlFor='amount'
                >
                  Amount
                </label>
                <Field
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  type='text'
                  id='amount'
                  name='amount'
                />
              </div>
              <div className='flex flex-col mr-2'>
                <label
                  className=' my-2 font-medium text-gray-900 dark:text-white'
                  htmlFor='rating'
                >
                  Rating
                </label>
                <Field
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  type='text'
                  id='rating'
                  name='rating'
                />
              </div>
              <div className='flex flex-col'>
                <label
                  className=' my-2 font-medium text-gray-900 dark:text-white'
                  htmlFor='price'
                >
                  Price
                </label>
                <Field
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  type='text'
                  id='price'
                  name='price'
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <label
                className='my-2 font-medium text-gray-900 dark:text-white'
                htmlFor='category'
              >
                Category
              </label>
              <Field
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                type='text'
                id='category'
                name='category'
              />
            </div>
            <div className='flex flex-col'>
              <label
                className='my-2 font-medium text-gray-900 dark:text-white'
                htmlFor='description'
              >
                Description
              </label>
              <Field
                className=' p-2.5 w-full  h-56 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                as='textarea'
                id='description'
                name='description'
              />
            </div>

            <button
              className='w-full items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
              type='submit'
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>

      <div className='flex items-center flex-col'>
        <div className='grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-5 max-h-[700px] overflow-auto mb-4'>
          {fileList.map((item: any) => (
            <div key={item.id} className='relative flex'>
              <Image
                className='border rounded border-gray-300 '
                src={item.images}
                width={100}
                height={100}
              />
              <TrashIcon
                onClick={() => handleFileDelete(item)}
                className=' absolute w-5 h-5 cursor-pointer  top-1 right-1 text-red-500 hover:text-red-300'
              />
            </div>
          ))}
        </div>

        <Upload beforeUpload={handleFileChange} showUploadList={false}>
          <Button icon={<UploadOutlined />}>Select Image</Button>
        </Upload>
      </div>
    </div>
  )
}

export default EditProducts
