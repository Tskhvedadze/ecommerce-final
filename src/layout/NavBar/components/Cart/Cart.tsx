import { useCartContext } from 'context'

import { ShoppingCartContainer, ShoppingIcon } from './Cart.styled'

export const Cart: React.FC = () => {
  const { setIsCartOpen, cartCount } = useCartContext()

  return (
    <ShoppingCartContainer>
      <ShoppingIcon onClick={() => setIsCartOpen(true)} />
      <div>
        <span className={`${cartCount && 'text-orange-400'}`}>{cartCount}</span>
      </div>
    </ShoppingCartContainer>
  )
}
