import { useNavigate } from 'react-router-dom'
import { TAuthorizationStage, useAuthContext, useCartContext } from 'context'
import { useTranslation } from 'react-i18next'

import { formatCurrency } from 'utils'
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
    const navigate = useNavigate()
    const { isCartOpen, cartItems, cartTotal } = useCartContext()
    const { status } = useAuthContext()

    const checkAuth = () => {
        if (status === TAuthorizationStage.UNAUTHORIZED) {
            return navigate('/SignIn')
        } else {
            return navigate('/checkout')
        }
    }

    return (
        <CartDropdownContainer isOpen={isCartOpen}>
            <CartItems>
                {!cartItems.length ? (
                    <EmptyMessage>{t('empty')}</EmptyMessage>
                ) : (
                    cartItems.map((cartItem: TShoppingCart) => (
                        <CartItem key={cartItem.id} {...cartItem} />
                    ))
                )}
            </CartItems>
            <ButtonContainer>
                <Button mode='secondary' onClick={checkAuth}>
                    {t('checkout')}
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
