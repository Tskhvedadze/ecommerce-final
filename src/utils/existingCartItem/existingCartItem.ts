import { TShoppingCart } from 'types/shoppingCart.types'

export const existingCartItem = (
    cartItemList: TShoppingCart[],
    targetCartItem: TShoppingCart,
): TShoppingCart | undefined =>
    cartItemList.find((cartItem) => cartItem.id === targetCartItem.id)
