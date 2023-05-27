import { useContext } from 'react'
import { CartContext } from 'context'

import { TShoppingCart } from 'types/shoppingCart.types'

import { Button } from 'components'
import { CartItem } from '..'

import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
    ButtonContainer,
    TotalText,
    AmountNumber,
} from './CartDropdown.styled'

export const CartDropdown = () => {
    const { cartItems, isCartOpen, cartTotal } = useContext(CartContext)

    return (
        <CartDropdownContainer isOpen={isCartOpen}>
            <CartItems>
                {cartItems.length === 0 ? (
                    <EmptyMessage>Cart is empty</EmptyMessage>
                ) : (
                    cartItems.map((cartItem: TShoppingCart) => (
                        <CartItem key={cartItem.id} {...cartItem} />
                    ))
                )}
            </CartItems>
            <ButtonContainer>
                <Button mode='secondary' disabled={cartItems.length === 0}>
                    Buy now
                </Button>
                <TotalText>
                    Total: <span>$</span>
                    <AmountNumber>{Number(cartTotal).toFixed(0)}</AmountNumber>
                </TotalText>
            </ButtonContainer>
        </CartDropdownContainer>
    )
}
