import { useContext } from 'react'
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
    rating,
}: ProductCardProps) => {
    const { t } = useTranslation(['components'])
    const { addItemToCart } = useContext(CartContext)
    const addProductToCart = () =>
        addItemToCart({ id, price, brand, images, quantity, title })

    return (
        <ProductCardContainer>
            <ProductCardSlider img={images} brand={brand} />
            <ProductCardContent>
                <ProductCardTitle to={`/products/${id}`}>
                    {brand}
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
