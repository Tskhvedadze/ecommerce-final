import { useTranslation } from 'react-i18next'
import { useCartContext } from 'context'
import { formatCurrency } from 'utils'

import { TShoppingCart } from 'types/shoppingCart.types'
import { CheckoutItems } from './components/CheckoutItems'

import {
    Container,
    UnorderList,
    TotalPrice,
    FooterDiv,
    EmptyMsg,
    Link,
} from './CheckoutContent.styled'

export const CheckoutContent = () => {
    const { t } = useTranslation(['Checkout'])
    const { cartItems, cartTotal } = useCartContext()

    return (
        <Container>
            <UnorderList>
                {cartTotal ? (
                    cartItems.map((items: TShoppingCart) => (
                        <CheckoutItems key={items.id} {...items} />
                    ))
                ) : (
                    <EmptyMsg>
                        {t('empty_msg')}...
                        <Link to={'/products'}>{t('products')}</Link>
                    </EmptyMsg>
                )}
            </UnorderList>
            <div>
                <TotalPrice>
                    <span>{t('total')}:</span>
                    <span className='text-green-400'>
                        {formatCurrency(cartTotal, t('currency'))}
                    </span>
                </TotalPrice>
            </div>
            <FooterDiv>
                <p>
                    <span>{t('moneyback')}</span>
                    <span>{t('within')}</span>
                </p>
            </FooterDiv>
        </Container>
    )
}
