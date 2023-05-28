import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
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
    const { t } = useTranslation(['components'])
    const { cartItems, isCartOpen, cartTotal } = useContext(CartContext)

    return (
        <CartDropdownContainer isOpen={isCartOpen}>
            <CartItems>
                {cartItems.length === 0 ? (
                    <EmptyMessage>{t('empty')}</EmptyMessage>
                ) : (
                    cartItems.map((cartItem: TShoppingCart) => (
                        <CartItem key={cartItem.id} {...cartItem} />
                    ))
                )}
            </CartItems>
            <ButtonContainer>
                <Button mode='secondary' disabled={cartItems.length === 0}>
                    {t('buy')}
                </Button>
                <TotalText>
                    {t('total')}: <span>$</span>
                    <AmountNumber>{Number(cartTotal).toFixed(0)}</AmountNumber>
                </TotalText>
            </ButtonContainer>
        </CartDropdownContainer>
    )
}
