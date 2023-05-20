import { TShoppingCart } from 'types/shoppingCart.types'

export const existingCartItem = (
    shoppingCartItems: TShoppingCart[],
    productToAdd: TShoppingCart,
) => shoppingCartItems.find((cartItem) => cartItem.id === productToAdd.id)

export const addCartItem = (
    shoppingCartItems: TShoppingCart[],
    productToAdd: TShoppingCart,
): TShoppingCart[] => {
    if (existingCartItem(shoppingCartItems, productToAdd)) {
        return shoppingCartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: (cartItem.quantity ?? 0) + 1 }
                : cartItem,
        )
    }

    return [...shoppingCartItems, { ...productToAdd, quantity: 1 }]
}
