import { TShoppingCart } from 'types/shoppingCart.types'
import { existingCartItem } from 'utils/existingCartItem/existingCartItem'

export const removeCartItem = (
    cartItems: TShoppingCart[],
    cartItemToRemove: TShoppingCart,
): TShoppingCart[] => {
    const { id, quantity } = cartItemToRemove

    if (existingCartItem(cartItems, cartItemToRemove)?.quantity === 1)
        return cartItems

    return cartItems.map((cartItem) =>
        cartItem.id === id && quantity
            ? { ...cartItem, quantity: quantity - 1 }
            : cartItem,
    )
}
