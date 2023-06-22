import { TAuthorizationStage, useAuthContext, useCartContext } from 'context'
import { useTranslation } from 'react-i18next'
import { TShoppingCart } from 'types/shoppingCart.types'
import { formatCurrency } from 'utils'
import { Drawer, Space, Empty } from 'antd'

import { CartItem } from '..'

import {
  EmptyMessage,
  EmptyTextContainer,
  FooterContainer,
  SLink,
  TotalPrice,
  TotalTitle,
} from './CartDrawer.styled'

export const CartDrawer = () => {
  const { t } = useTranslation(['components'])
  const { isCartOpen, onClose, cartTotal, cartItems } = useCartContext()
  const { status } = useAuthContext()

  return (
    <Drawer
      title={`${t('cart')}`}
      placement='right'
      size={'default'}
      onClose={onClose}
      open={isCartOpen}
      extra={
        <Space>
          <SLink
            to={
              status === TAuthorizationStage.UNAUTHORIZED
                ? '/SignIn'
                : '/checkout'
            }
          >
            {t('checkout')}
          </SLink>
        </Space>
      }
      footer={
        <FooterContainer>
          <TotalTitle>{t('total_price')}</TotalTitle>
          <TotalPrice>{formatCurrency(cartTotal, t('currency'))}</TotalPrice>
        </FooterContainer>
      }
    >
      {cartTotal ? (
        cartItems.map((cartItem: TShoppingCart) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))
      ) : (
        <EmptyTextContainer>
          <Empty description={<EmptyMessage>{t('empty')}</EmptyMessage>} />
        </EmptyTextContainer>
      )}
    </Drawer>
  )
}
