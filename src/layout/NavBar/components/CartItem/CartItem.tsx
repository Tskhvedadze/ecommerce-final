import React, { useContext, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from 'context'

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
        const {
            addItemToCart,
            removeItemFromCart,
            clearItemFromCart,
            setIsCartOpen,
            isCartOpen,
        } = useContext(CartContext)

        const redirect = useCallback(() => {
            setIsCartOpen(!isCartOpen)
            navigate(`/products/${id}`)
        }, [setIsCartOpen, isCartOpen, navigate, id])

        const cartItems = useMemo(
            () => ({ id, brand, quantity, price, images, title }),
            [id, brand, quantity, price, images, title],
        )

        const totalPrice = useMemo(
            () => (Number(price) * Number(quantity)).toFixed(0),
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
                    <p>
                        <span className='font-bold mr-1'>$</span>
                        {totalPrice}
                    </p>
                </TotalQuantityContainer>
            </CartItemContainer>
        )
    },
)
