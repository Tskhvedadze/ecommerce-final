import { useState, useEffect, PropsWithChildren } from 'react'
import { CartContext } from 'context'
import { TShoppingCart } from 'types/shoppingCart.types'
import { addCartItem } from 'utils/addCartItem/addCartItem'
import { removeCartItem } from 'utils/removeCartItem/removeCartItem'

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<TShoppingCart[]>([])
    const [cartCount, setCartCount] = useState<number>(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + (cartItem.quantity ?? 0),
            0,
        )
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd: TShoppingCart) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemToCart = (cartItemToRemove: TShoppingCart) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    return (
        <CartContext.Provider
            value={{
                isCartOpen,
                setIsCartOpen,
                addItemToCart,
                removeItemToCart,
                cartItems,
                cartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
