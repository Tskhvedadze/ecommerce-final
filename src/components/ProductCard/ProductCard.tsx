import { useContext } from 'react'
import { ShoppingCartContext } from 'context'

import { TShoppingCart } from 'types/shoppingCart.types'

import { Button } from '..'
import { ProductCardSlider } from './ProductCardSlider/ProductCardSlider'

import {
    ProductCardContainer,
    ProductCardContent,
    ProductCardTitle,
    ProductCardPriceContainer,
    ProductCardPrice,
} from './ProductCard.styled'

type ProductCardProps = {} & TShoppingCart

export const ProductCard = ({
    id,
    price,
    images,
    brand,
    quantity,
}: ProductCardProps) => {
    const { addItemToCart } = useContext(ShoppingCartContext)
    const addProductToCart = () =>
        addItemToCart({ id, price, brand, images, quantity })

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
                <Button
                    mode='secondary'
                    className='uppercase'
                    onClick={addProductToCart}
                >
                    Add to Cart
                </Button>
            </ProductCardPriceContainer>
        </ProductCardContainer>
    )
}
