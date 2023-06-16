import { Dispatch, SetStateAction, createContext, useContext } from 'react'
import { TShoppingCart } from 'types/shoppingCart.types'

type TCartContext = {
  isCartOpen: boolean
  cartItems: TShoppingCart[]
  cartCount: number
  cartTotal: number
  setCartItems: Dispatch<SetStateAction<TShoppingCart[]>>
  onClose: () => void
  setIsCartOpen: Dispatch<SetStateAction<boolean>>
  addItemToCart: (cartItemToAdd: TShoppingCart) => void
  removeItemFromCart: (productToRemove: TShoppingCart) => void
  clearItemFromCart: (productToClear: TShoppingCart) => void
}

export const CartContext = createContext({} as TCartContext)

export const useCartContext = () => {
  return useContext(CartContext)
}
