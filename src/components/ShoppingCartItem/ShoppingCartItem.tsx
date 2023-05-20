import { TShoppingCart } from 'types/shoppingCart.types'

import {
    CartItemContainer,
    TotalQuantityContainer,
} from './ShoppingCartItem.styled'

type ShoppingCartItemProps = {} & Omit<TShoppingCart, 'id'>

export const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
    brand,
    quantity,
    price,
    images,
}) => {
    const totalPrice = (Number(price) * Number(quantity)).toFixed(1)

    return (
        <CartItemContainer>
            <img width={75} src={images[0]} alt={brand} />
            <TotalQuantityContainer>
                <span>{quantity}</span>
                <span>x</span>
                <p>
                    <span>$</span>
                    {totalPrice}
                </p>
            </TotalQuantityContainer>
        </CartItemContainer>
    )
}
