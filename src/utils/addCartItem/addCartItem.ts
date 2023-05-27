import { TShoppingCart } from 'types/shoppingCart.types'

export const existingCartItem = (
    cartItems: TShoppingCart[],
    productToAdd: TShoppingCart,
) => cartItems.find((cartItem) => cartItem.id === productToAdd.id)

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
