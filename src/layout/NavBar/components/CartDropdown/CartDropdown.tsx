import { useNavigate } from 'react-router-dom'
import { TAuthorizationStage, useAuthContext, useCartContext } from 'context'
import { useTranslation } from 'react-i18next'

import { TShoppingCart } from 'types/shoppingCart.types'

import { Button } from 'components'
import { CartItem } from '..'

import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
    ButtonContainer,
} from './CartDropdown.styled'

export const CartDropdown = () => {
    const { t } = useTranslation(['components'])
    const { isCartOpen, cartItems } = useCartContext()
    const { status } = useAuthContext()
    const navigate = useNavigate()

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
                <Button
                    mode='secondary'
                    onClick={checkAuth}
                    className='rounded'
                >
                    {t('checkout')}
                </Button>
            </ButtonContainer>
        </CartDropdownContainer>
    )
}
