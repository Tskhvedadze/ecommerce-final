import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { formatCurrency } from 'utils'

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

  return (
    <List>
      <div>
        <Img src={images[0]} alt={brand} />
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
          <NavLink to={`/products/${id}`} target='blank'>
            <Eye />
          </NavLink>
        </div>
        <div className='mx-1.5'>
          <EditBtn to={`edit/${id}`}>{t('edit')}</EditBtn>
        </div>
        <div>
          <DeleteBtn>{t('remove')}</DeleteBtn>
        </div>
      </div>
    </List>
  )
}
