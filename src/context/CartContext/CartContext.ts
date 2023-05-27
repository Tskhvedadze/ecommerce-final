import { createContext } from 'react'
import { TShoppingCart } from 'types/shoppingCart.types'

type TCartContext = {
    isCartOpen: boolean
    setIsCartOpen: (open: boolean) => void
    cartItems: TShoppingCart[]
    addItemToCart: (productToAdd: TShoppingCart) => void
    cartCount: number
    removeItemToCart: (productToRemove: TShoppingCart) => void
}

export const CartContext = createContext<TCartContext>({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemToCart: () => {},
})
