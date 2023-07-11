import { NavLink } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'
import { useTranslation } from 'react-i18next'
import { Modal, message } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'
import { formatCurrency } from 'utils'
import { private_axios } from 'utils/axios/private_axios'

import {
  List,
  Img,
  Content,
  EditBtn,
  DeleteBtn,
  Eye,
  Price,
  Brand,
} from './ProductsList.styled'

type ProductsListProps = {
  id: number
  images: string[]
  title: string
  brand: string
  price: number
}

export const ProductsList = ({
  id,
  title,
  brand,
  price,
  images,
}: ProductsListProps) => {
  const { t } = useTranslation(['Admin'])
  const queryQlient = useQueryClient()
  const { mutateAsync } = useMutation(async (id: number) => {
    try {
      Modal.confirm({
        title: `${t('you_want')}`,
        icon: <ExclamationCircleFilled />,
        okText: `${t('yes')}`,
        okType: 'danger',
        cancelText: `${t('no')}`,
        async onOk() {
          try {
            await new Promise((resolve) => {
              setTimeout(resolve, 2000)
            })
            await private_axios.delete(`/product/${id}`)
            message.success(`${t('success')}`)
            queryQlient.invalidateQueries()
          } catch (error) {
            message.error(`${t('could_not')}`)
          }
        },
      })
    } catch (error) {
      return error
    }
  })

  async function handleDelete(id: number) {
    await mutateAsync(id)
  }

  return (
    <List>
      <div>
        <Img src={images && images[0]} alt={brand} />
        <Content>
          <p>{title}</p>
          <p>
            {t('brand')}: <Brand>{brand}</Brand>
          </p>
          <p>
            {t('price')}: <Price>{formatCurrency(price, t('currency'))}</Price>
          </p>
        </Content>
      </div>
      <div>
        <div>
          <NavLink to={`/products/${id}`} target='_blank'>
            <Eye />
          </NavLink>
        </div>
        <div className='mx-1.5'>
          <EditBtn to={`edit/${id}`}>{t('edit')}</EditBtn>
        </div>
        <div>
          <DeleteBtn onClick={() => handleDelete(id)}>{t('remove')}</DeleteBtn>
        </div>
      </div>
    </List>
  )
}
