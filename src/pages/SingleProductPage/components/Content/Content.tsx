import { useContext } from 'react'
import { CartContext } from 'context'
import { useTranslation } from 'react-i18next'
import { Rate } from 'antd'

import { TShoppingCart } from 'types/shoppingCart.types'

import {
    AddToCartContainer,
    Brand,
    Category,
    Description,
    Price,
    Rating,
    Title,
    RatingContainer,
    AddButton,
    RemoveButton,
    StyledContent,
    StyledLabel,
    StyledValue,
    StyledDollar,
    StyledPrice,
    DescriptionLabel,
} from './Content.styled'

type ContentProps = {
    id: number
    brand: string
    title: string
    category: string
    price: number
    rating: number
    description: string
} & TShoppingCart

export const Content = ({
    id,
    quantity,
    images,
    description,
    brand,
    title,
    category,
    price,
    rating,
}: ContentProps) => {
    const { t } = useTranslation(['components'])
    const { addItemToCart, clearItemFromCart } = useContext(CartContext)
    const addProduct = () =>
        addItemToCart({ id, price, brand, images, quantity, title })
    const clearProduct = () =>
        clearItemFromCart({ id, price, brand, images, quantity, title })

    return (
        <StyledContent>
            <Brand>
                <StyledLabel>{t('Brand')}:</StyledLabel>
                <StyledValue>{brand}</StyledValue>
            </Brand>

            <Title>
                <StyledLabel>{t('Title')}:</StyledLabel>
                <StyledValue>{title}</StyledValue>
            </Title>

            <Category>
                <StyledLabel>{t('Category')}:</StyledLabel>
                <StyledValue>{category}</StyledValue>
            </Category>
            <Price>
                <StyledLabel>{t('Price')}:</StyledLabel>
                <StyledDollar>$</StyledDollar>
                <StyledPrice>{price}</StyledPrice>
            </Price>

            <RatingContainer>
                <StyledLabel>{t('Rating')}:</StyledLabel>
                <Rate disabled defaultValue={rating} />
                <Rating>{rating}</Rating>
            </RatingContainer>

            <Description>
                <DescriptionLabel>{t('Description')}:</DescriptionLabel>
                {description}
            </Description>

            <AddToCartContainer>
                <AddButton onClick={addProduct}>{t('Add')}</AddButton>

                <RemoveButton danger onClick={clearProduct}>
                    {t('remove')}
                </RemoveButton>
            </AddToCartContainer>
        </StyledContent>
    )
}
