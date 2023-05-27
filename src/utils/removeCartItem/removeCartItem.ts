import { TShoppingCart } from 'types/shoppingCart.types'
import { existingCartItem } from 'utils/existingCartItem/existingCartItem'

export const removeCartItem = (
    cartItems: TShoppingCart[],
    cartItemToRemove: TShoppingCart,
): TShoppingCart[] => {
    const { id, quantity } = cartItemToRemove

    if (existingCartItem(cartItems, cartItemToRemove)?.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== id)
    }

    return cartItems.map((cartItem) =>
        cartItem.id === id
            ? { ...cartItem, quantity: (quantity ?? 0) - 1 }
            : cartItem,
    )
}
