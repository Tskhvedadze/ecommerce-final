import { TAuthorizationStage, useAuthContext, useCartContext } from 'context'
import { useTranslation } from 'react-i18next'

import { TShoppingCart } from 'types/shoppingCart.types'

import { CartItem } from '..'

import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
    ButtonContainer,
    SLink,
} from './CartDropdown.styled'

export const CartDropdown = () => {
    const { t } = useTranslation(['components'])
    const { isCartOpen, cartTotal, cartItems } = useCartContext()
    const { status } = useAuthContext()

    return (
        <CartDropdownContainer isOpen={isCartOpen}>
            <CartItems>
                {cartTotal ? (
                    cartItems.map((cartItem: TShoppingCart) => (
                        <CartItem key={cartItem.id} {...cartItem} />
                    ))
                ) : (
                    <EmptyMessage>{t('empty')}</EmptyMessage>
                )}
            </CartItems>
            <ButtonContainer>
                <SLink
                    to={
                        status === TAuthorizationStage.UNAUTHORIZED
                            ? '/SignIn'
                            : '/checkout'
                    }
                >
                    {t('checkout')}
                </SLink>
            </ButtonContainer>
        </CartDropdownContainer>
    )
}
