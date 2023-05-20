import { useState, PropsWithChildren } from 'react'

import { ShoppingCartContext } from 'context'

export const ShoppingCartProvider = ({ children }: PropsWithChildren) => {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

    return (
        <ShoppingCartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
