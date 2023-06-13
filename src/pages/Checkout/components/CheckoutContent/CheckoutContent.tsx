import { useCartContext } from 'context'
import { formatCurrency } from 'utils'
import { TShoppingCart } from 'types/shoppingCart.types'
import { CheckoutItems } from './components/CheckoutItems'
import { useTranslation } from 'react-i18next'

import {
    Container,
    UnorderList,
    TotalPrice,
    FooterDiv,
} from './CheckoutContent.styled'

export const CheckoutContent = () => {
    const { t } = useTranslation(['Checkout'])
    const { cartItems, cartTotal } = useCartContext()

    return (
        <Container>
            <UnorderList>
                {cartItems.map((items: TShoppingCart) => (
                    <CheckoutItems key={items.id} {...items} />
                ))}
            </UnorderList>
            <div className='space-y-2 '>
                <TotalPrice>
                    <span>{t('total')}:</span>
                    <span className=' text-green-400'>
                        {formatCurrency(cartTotal, t('currency'))}
                    </span>
                </TotalPrice>
            </div>
            <FooterDiv>
                <p className='flex flex-col'>
                    <span className='text-sm font-bold text-gray-700'>
                        {t('moneyback')}
                    </span>
                    <span className='text-xs font-medium text-gray-700'>
                        {t('within')}
                    </span>
                </p>
            </FooterDiv>
        </Container>
    )
}
