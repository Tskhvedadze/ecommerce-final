import { TShoppingCart } from 'types/shoppingCart.types'
import { existingCartItem } from 'utils/existingCartItem/existingCartItem'

export const addCartItem = (
    cartItems: TShoppingCart[],
    productToAdd: TShoppingCart,
): TShoppingCart[] => {
    if (existingCartItem(cartItems, productToAdd)) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: (cartItem.quantity ?? 0) + 1 }
                : cartItem,
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}
