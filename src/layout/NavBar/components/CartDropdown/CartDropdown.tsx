import { useCartContext } from 'hook'
import { useTranslation } from 'react-i18next'

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
import { formatCurrency } from 'utils'

export const CartDropdown = () => {
    const { t } = useTranslation(['components'])
    const { isCartOpen, cartItems, cartTotal } = useCartContext()

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
                    {t('total')}:
                    <AmountNumber>
                        {formatCurrency(cartTotal, t('currency'))}
                    </AmountNumber>
                </TotalText>
            </ButtonContainer>
        </CartDropdownContainer>
    )
}
