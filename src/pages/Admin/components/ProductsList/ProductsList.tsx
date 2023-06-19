import { List, Img, Content, EditBtn, DeleteBtn } from './ProductsList.styled'

type ProductsListProps = {
  id: number
  images: string[]
  title: string
  brand: string
  price: number
}

export const ProductsList = ({
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
        <div className='mr-2'>
          <EditBtn>Edit</EditBtn>
        </div>
        <div>
          <DeleteBtn>Remove</DeleteBtn>
        </div>
      </div>
    </List>
  )
}
