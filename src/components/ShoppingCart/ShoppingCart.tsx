import { useContext, useCallback } from 'react'
import { ShoppingCartContext } from 'context'
import { ShoppingCartContainer, ShoppingIcon } from './ShoppingCart.styled'

type ShoppingCartProps = {}

export const ShoppingCart: React.FC<ShoppingCartProps> = () => {
    const { isCartOpen, setIsCartOpen } = useContext(ShoppingCartContext)

    const toggleDropdown = useCallback(() => {
        setIsCartOpen(!isCartOpen)
    }, [isCartOpen, setIsCartOpen])

    return (
        <ShoppingCartContainer>
            <ShoppingIcon onClick={toggleDropdown} />
            <div>
                <span>3</span>
            </div>
        </ShoppingCartContainer>
    )
}
