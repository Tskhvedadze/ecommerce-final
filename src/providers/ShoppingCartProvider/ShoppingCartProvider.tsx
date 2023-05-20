import { useState, useEffect, PropsWithChildren } from 'react'
import { ShoppingCartContext } from 'context'
import { TShoppingCart } from 'types/shoppingCart.types'
import { addCartItem } from 'utils/addCartItem/addCartItem'

export const ShoppingCartProvider: React.FC<PropsWithChildren> = ({
    children,
}) => {
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
        setCartItems((prevCartItems) =>
            addCartItem(prevCartItems, productToAdd),
        )
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                isCartOpen,
                setIsCartOpen,
                addItemToCart,
                cartItems,
                cartCount,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}
