import { TShoppingCart } from 'types/shoppingCart.types'

export const clearCartItem = (
    cartItems: TShoppingCart[],
    productToClear: TShoppingCart,
): TShoppingCart[] => {
    return cartItems.filter((cartItem) => cartItem.id !== productToClear.id)
}
