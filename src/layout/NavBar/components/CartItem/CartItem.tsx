import React, { useContext, useMemo } from 'react'
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
        const { addItemToCart, removeItemFromCart, clearItemFromCart } =
            useContext(CartContext)

        const cartItems = { id, brand, quantity, price, images, title }

        const totalPrice = useMemo(
            () => (Number(price) * Number(quantity)).toFixed(0),
            [price, quantity],
        )

        return (
            <CartItemContainer>
                <ItemWrapper>
                    <ItemImage src={images[0]} alt={brand} />
                    <QuantityContainer>
                        <RemoveItem
                            onClick={() => removeItemFromCart({ ...cartItems })}
                        />
                        <QuantityText>{quantity}</QuantityText>

                        <AddItem
                            onClick={() => addItemToCart({ ...cartItems })}
                        />
                    </QuantityContainer>
                    <DeleteIcon
                        onClick={() => clearItemFromCart({ ...cartItems })}
                    />
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
