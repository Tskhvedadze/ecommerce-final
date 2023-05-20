import { createContext } from 'react'

type TShoppingCartContext = {
    isCartOpen: boolean
    setIsCartOpen: (open: boolean) => void
}

export const ShoppingCartContext = createContext<TShoppingCartContext>({
    isCartOpen: false,
    setIsCartOpen: () => {},
})
