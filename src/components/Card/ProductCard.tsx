import { Button } from '..'
import { ProductCardSlider } from './ProductCardSlider/ProductCardSlider'

import {
    ProductCardContainer,
    ProductCardContent,
    ProductCardTitle,
    ProductCardPriceContainer,
    ProductCardPrice,
} from './ProductCard.styled'

type ProductCardProps = {
    id: number
    price: number
    images: string[]
    brand: string
}

export const ProductCard = ({ id, price, images, brand }: ProductCardProps) => {
    return (
        <ProductCardContainer>
            <ProductCardSlider img={images} />
            <ProductCardContent>
                <ProductCardTitle to={`/product/${id}`}>
                    {brand}
                </ProductCardTitle>
            </ProductCardContent>
            <ProductCardPriceContainer>
                <ProductCardPrice>
                    <span>$</span>
                    {Number(price).toFixed(2)}
                </ProductCardPrice>
                <Button mode='secondary' className='uppercase'>
                    Add to Cart
                </Button>
            </ProductCardPriceContainer>
        </ProductCardContainer>
    )
}
