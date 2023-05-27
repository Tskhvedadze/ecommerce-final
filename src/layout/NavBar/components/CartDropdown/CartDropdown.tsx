import { useContext } from 'react'
import { CartContext } from 'context'

import { TShoppingCart } from 'types/shoppingCart.types'

import { Button } from 'components'
import { CartItem } from '..'

import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
} from './CartDropdown.styled'

type ShoppingCartDropdownProps = {}

export const CartDropdown = (props: ShoppingCartDropdownProps) => {
    const { cartItems, isCartOpen } = useContext(CartContext)

    return (
        <CartDropdownContainer isOpen={isCartOpen}>
            <CartItems>
                {!cartItems?.length ? (
                    <EmptyMessage>Cart Is empty</EmptyMessage>
                ) : (
                    cartItems?.map(
                        ({
                            id,
                            quantity,
                            price,
                            brand,
                            images,
                            title,
                        }: TShoppingCart) => (
                            <CartItem
                                key={id}
                                id={id}
                                quantity={quantity}
                                price={price}
                                brand={brand}
                                images={images}
                                title={title}
                            />
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
