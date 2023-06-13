import { useState, useEffect, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { CartContext } from 'context'

import { TShoppingCart } from 'types/shoppingCart.types'
import { addCartItem, removeCartItem, clearCartItem } from 'utils'

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<TShoppingCart[]>([])
    const [cartCount, setCartCount] = useState<number>(0)
    const [cartTotal, setCartTotal] = useState<number>(0)
    const location = useLocation()

    useEffect(() => {
        setIsCartOpen(false)
    }, [location])

    useEffect(() => {
        const cartCount = cartItems.reduce(
            (total, cartItem) => total + (cartItem.quantity ?? 0),
            0,
        )
        setCartCount(cartCount)
    }, [cartItems])

    useEffect(() => {
        const cartTotal = cartItems.reduce(
            (total, cartItem) =>
                total + (cartItem.quantity ?? 0) * cartItem.price,
            0,
        )
        setCartTotal(cartTotal)
    }, [cartItems])

    const addItemToCart = (cartItemToAdd: TShoppingCart) => {
        setCartItems(addCartItem(cartItems, cartItemToAdd))
    }

    const removeItemFromCart = (cartItemToRemove: TShoppingCart) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear: TShoppingCart) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }

    return (
        <CartContext.Provider
            value={{
                isCartOpen,
                setIsCartOpen,
                addItemToCart,
                removeItemFromCart,
                clearItemFromCart,
                cartItems,
                cartCount,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
