import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CartContext } from 'context'

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
    title,
}: ProductCardProps) => {
    const { t } = useTranslation(['components'])
    const { addItemToCart } = useContext(CartContext)
    const addProductToCart = () =>
        addItemToCart({ id, price, brand, images, quantity, title })

    return (
        <ProductCardContainer>
            <ProductCardSlider img={images} />
            <ProductCardContent>
                <ProductCardTitle to={`/products/${title}/${id}`}>
                    {brand}
                </ProductCardTitle>
            </ProductCardContent>
            <ProductCardPriceContainer>
                <ProductCardPrice>
                    <span>$</span>
                    {Number(price).toFixed(0)}
                </ProductCardPrice>
                <Button
                    mode='secondary'
                    className='uppercase'
                    onClick={addProductToCart}
                >
                    {t('Add')}
                </Button>
            </ProductCardPriceContainer>
        </ProductCardContainer>
    )
}
