import { useEffect } from 'react'
import { useCartContext } from 'context'
import { useLocation } from 'react-router-dom'

import { ShoppingCartContainer, ShoppingIcon } from './Cart.styled'

export const Cart: React.FC = () => {
  const location = useLocation()

  const { setIsCartOpen, isCartOpen, cartCount } = useCartContext()

  useEffect(() => {
    setIsCartOpen(false)
  }, [location, setIsCartOpen])

  const toggleDropdown = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <ShoppingCartContainer>
      <ShoppingIcon onMouseDown={toggleDropdown} />
      <div>
        <span className={`${cartCount && 'text-orange-400'}`}>{cartCount}</span>
      </div>
    </ShoppingCartContainer>
  )
}
