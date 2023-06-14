import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useCartContext } from 'context'
import { formatCurrency } from 'utils'
import { TShoppingCart } from 'types/shoppingCart.types'

import {
    FlexDiv,
    List,
    Brand,
    Img,
    Price,
    Quantity,
    Remove,
    Add,
    QuantityDiv,
    Delete,
    Container,
} from './CheckoutItems.styled'

type CartItemListsProps = {} & TShoppingCart

export const CheckoutItems = ({
    id,
    brand,
    quantity,
    price,
    images,
    title,
}: CartItemListsProps) => {
    const { t } = useTranslation(['Checkout'])
    const { removeItemFromCart, addItemToCart, clearItemFromCart } =
        useCartContext()

    const totalPrice = useMemo(
        () => Number(price) * Number(quantity),
        [price, quantity],
    )

    const cartItems = useMemo(
        () => ({ id, brand, quantity, price, images, title }),
        [id, brand, quantity, price, images, title],
    )

    const handleRemoveItem = useCallback(() => {
        removeItemFromCart(cartItems)
    }, [removeItemFromCart, cartItems])

    const handleAddItem = useCallback(() => {
        addItemToCart(cartItems)
    }, [addItemToCart, cartItems])

    const handleClearItem = useCallback(() => {
        clearItemFromCart(cartItems)
    }, [clearItemFromCart, cartItems])

    return (
        <Container>
            <List>
                <FlexDiv>
                    <Img src={images[0]} alt={brand} />
                    <div className='ml-3'>
                        <Brand>{brand}</Brand>
                        <Price>
                            {formatCurrency(totalPrice, t('currency'))}
                        </Price>
                    </div>
                </FlexDiv>
                <QuantityDiv>
                    <Remove onClick={handleRemoveItem} />
                    <Quantity>{quantity}</Quantity>
                    <Add onClick={handleAddItem} />
                </QuantityDiv>
            </List>
            <Delete onClick={handleClearItem} />
        </Container>
    )
}
