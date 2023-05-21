import { useContext } from 'react'
import { ShoppingCartContext } from 'context'

import { TShoppingCart } from 'types/shoppingCart.types'

import { Button, ShoppingCartItem } from '..'
import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
} from './ShoppingCartDropdown.styled'

type ShoppingCartDropdownProps = {}

export const ShoppingCartDropdown = (props: ShoppingCartDropdownProps) => {
    const { cartItems, isCartOpen } = useContext(ShoppingCartContext)

    return (
        <CartDropdownContainer isOpen={isCartOpen}>
            <CartItems>
                {!cartItems?.length ? (
                    <EmptyMessage>Cart Is empty</EmptyMessage>
                ) : (
                    cartItems?.map(
                        ({ id, ...CartItemProps }: TShoppingCart) => (
                            <ShoppingCartItem key={id} {...CartItemProps} />
                        ),
                    )
                )}
            </CartItems>
            <Button
                mode='secondary'
                className='mt-[13px] w-[85%]'
                disabled={!cartItems?.length}
            >
                Go To Checkout
            </Button>
        </CartDropdownContainer>
    )
}
