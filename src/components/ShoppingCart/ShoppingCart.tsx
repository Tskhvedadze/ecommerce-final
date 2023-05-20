import { useContext, useCallback } from 'react'
import { ShoppingCartContext } from 'context'
import { ShoppingCartContainer, ShoppingIcon } from './ShoppingCart.styled'

type ShoppingCartProps = {}

export const ShoppingCart: React.FC<ShoppingCartProps> = () => {
    const { isCartOpen, setIsCartOpen, cartCount } =
        useContext(ShoppingCartContext)

    const toggleDropdown = useCallback(() => {
        setIsCartOpen(!isCartOpen)
    }, [isCartOpen, setIsCartOpen])

    return (
        <ShoppingCartContainer>
            <ShoppingIcon onClick={toggleDropdown} />
            <div>
                <span>{cartCount}</span>
            </div>
        </ShoppingCartContainer>
    )
}
