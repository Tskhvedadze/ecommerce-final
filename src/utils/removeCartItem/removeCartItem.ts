import { TShoppingCart } from 'types/shoppingCart.types'

export const existingCartItem = (
    cartItems: TShoppingCart[],
    productToRemove: TShoppingCart,
) => cartItems.find((cartItem) => cartItem.id === productToRemove.id)

export const removeCartItem = (
    cartItems: TShoppingCart[],
    productToRemove: TShoppingCart,
): TShoppingCart[] => {
    if (existingCartItem(cartItems, productToRemove)?.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== productToRemove.id,
        )
    }

    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: (cartItem.quantity ?? 0) - 1 }
            : cartItem,
    )
}
