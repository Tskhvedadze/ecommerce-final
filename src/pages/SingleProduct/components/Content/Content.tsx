import React, { useState } from 'react'
import { useCartContext } from 'context'
import { useTranslation } from 'react-i18next'
import { Rate } from 'antd'

import { formatCurrency } from 'utils'
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
  StyledPrice,
  DescriptionLabel,
} from './Content.styled'

type ContentProps = {
  category: string
  rating: number
  description: string
} & TShoppingCart

const Content = React.memo(
  ({
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
    const [showMore, setShowMore] = useState(false)

    const { addItemToCart, clearItemFromCart } = useCartContext()
    const addProduct = () =>
      addItemToCart({ id, price, brand, images, quantity, title })
    const clearProduct = () =>
      clearItemFromCart({ id, price, brand, images, quantity, title })

    const truncatedDescription = showMore
      ? description
      : description.slice(0, 350)

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
          <StyledPrice>{formatCurrency(price, t('currency'))}</StyledPrice>
        </Price>

        <RatingContainer>
          <StyledLabel>{t('Rating')}:</StyledLabel>
          <Rate disabled defaultValue={rating} />
          <Rating>{rating}</Rating>
        </RatingContainer>

        <Description>
          <DescriptionLabel>{t('Description')}:</DescriptionLabel>
          {truncatedDescription}
          <button
            className='text-blue-400 hover:text-blue-300 text-[16px] ml-2'
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? `${t('less')}` : `${t('more')}`}
          </button>
        </Description>

        <AddToCartContainer>
          <AddButton onClick={addProduct}>{t('Add')}</AddButton>
          <RemoveButton danger onClick={clearProduct}>
            {t('remove')}
          </RemoveButton>
        </AddToCartContainer>
      </StyledContent>
    )
  },
)

export default Content
