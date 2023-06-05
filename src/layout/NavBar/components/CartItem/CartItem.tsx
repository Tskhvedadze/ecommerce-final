import React, { useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useCartContext } from 'context'
import { useNavigate } from 'react-router-dom'

import { formatCurrency } from 'utils'
import { TShoppingCart } from 'types/shoppingCart.types'

import {
    TotalQuantityContainer,
    CartItemContainer,
    ItemImage,
    ItemWrapper,
    QuantityContainer,
    QuantityText,
    AddItem,
    RemoveItem,
    DeleteIcon,
} from './CartItem.styled'

type ShoppingCartItemProps = {} & TShoppingCart

export const CartItem: React.FC<ShoppingCartItemProps> = React.memo(
    ({ id, brand, quantity, price, images, title }) => {
        const navigate = useNavigate()
        const { t } = useTranslation(['components'])
        const {
            setIsCartOpen,
            isCartOpen,
            removeItemFromCart,
            addItemToCart,
            clearItemFromCart,
        } = useCartContext()

        const redirect = useCallback(() => {
            setIsCartOpen(!isCartOpen)
            navigate(`/products/${id}`)
        }, [setIsCartOpen, isCartOpen, navigate, id])

        const cartItems = useMemo(
            () => ({ id, brand, quantity, price, images, title }),
            [id, brand, quantity, price, images, title],
        )

        const totalPrice = useMemo(
            () => Number(price) * Number(quantity),
            [price, quantity],
        )

        const handleRemoveItem = useCallback(() => {
            removeItemFromCart(cartItems)
        }, [removeItemFromCart, cartItems])

        const handleAddItem = useCallback(() => {
            addItemToCart(cartItems)
        }, [addItemToCart, cartItems])

        const handleClearItem = useCallback(() => {
            clearItemFromCart(cartItems)
        }, [clearItemFromCart, cartItems])

        return (
            <CartItemContainer>
                <ItemWrapper>
                    <ItemImage onClick={redirect} src={images[0]} alt={brand} />
                    <QuantityContainer>
                        <RemoveItem onClick={handleRemoveItem} />
                        <QuantityText>{quantity}</QuantityText>
                        <AddItem onClick={handleAddItem} />
                    </QuantityContainer>
                    <DeleteIcon onClick={handleClearItem} />
                </ItemWrapper>
                <TotalQuantityContainer>
                    <span className='flex-grow font-semibold'>{brand}</span>
                    <p>{formatCurrency(totalPrice, t('currency'))}</p>
                </TotalQuantityContainer>
            </CartItemContainer>
        )
    },
)
