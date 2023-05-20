import { createContext } from 'react'
import { TShoppingCart } from 'types/shoppingCart.types'

type TShoppingCartContext = {
    isCartOpen: boolean
    setIsCartOpen: (open: boolean) => void
    cartItems: TShoppingCart[]
    addItemToCart: (productToAdd: TShoppingCart) => void
    cartCount: number
}

export const ShoppingCartContext = createContext<TShoppingCartContext>({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
})
