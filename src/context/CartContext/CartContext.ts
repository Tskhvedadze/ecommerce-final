import { createContext } from 'react'
import { TShoppingCart } from 'types/shoppingCart.types'

type TCartContext = {
    isCartOpen: boolean
    cartItems: TShoppingCart[]
    cartCount: number
    cartTotal: number
    setIsCartOpen: (open: boolean) => void
    addItemToCart: (cartItemToAdd: TShoppingCart) => void
    removeItemFromCart: (productToRemove: TShoppingCart) => void
    clearItemFromCart: (productToClear: TShoppingCart) => void
}

export const CartContext = createContext<TCartContext>({
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    setIsCartOpen: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
})
