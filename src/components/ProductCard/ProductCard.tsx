import { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CartContext } from 'context'
import { Rate } from 'antd'

import { formatCurrency } from 'utils'
import { TShoppingCart } from 'types/shoppingCart.types'

import { Button } from '..'
import { ProductCardSlider } from './ProductCardSlider/ProductCardSlider'

import {
    ProductCardContainer,
    ProductCardContent,
    ProductCardTitle,
    ProductCardPriceContainer,
    RatingContainer,
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
    const [rating] = useState(() =>
        Number((Math.random() * (5 - 3.7) + 3.7).toFixed(1)),
    )
    const { addItemToCart } = useContext(CartContext)
    const addProductToCart = () =>
        addItemToCart({ id, price, brand, images, quantity, title })

    return (
        <ProductCardContainer>
            <ProductCardSlider img={images} brand={brand} />
            <ProductCardContent>
                <ProductCardTitle to={`/products/${id}`}>
                    {title.slice(0, 25)}...
                </ProductCardTitle>
                <RatingContainer>
                    <Rate disabled defaultValue={rating} />
                    <p>{rating}</p>
                </RatingContainer>
            </ProductCardContent>
            <ProductCardPriceContainer>
                <ProductCardPrice>
                    {formatCurrency(price, t('currency'))}
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
