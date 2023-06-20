import { NavLink } from 'react-router-dom'
import {
  List,
  Img,
  Content,
  EditBtn,
  DeleteBtn,
  Eye,
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
  return (
    <List>
      <div>
        <Img src={images[0]} alt={brand} />
        <Content>
          <p>{title}</p>
          <p>
            Brand: <span className=' text-gray-900'>{brand}</span>
          </p>
          <p>
            Price: <span>{price}</span>
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
          <EditBtn to={`edit/${id}`}>Edit</EditBtn>
        </div>
        <div>
          <DeleteBtn>Remove</DeleteBtn>
        </div>
      </div>
    </List>
  )
}
