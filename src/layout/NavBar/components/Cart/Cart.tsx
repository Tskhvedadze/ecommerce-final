/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useRef, useEffect } from 'react'
import { CartContext } from 'context'
import { ShoppingCartContainer, ShoppingIcon } from './Cart.styled'
import { useLocation } from 'react-router-dom'

export const Cart: React.FC = () => {
    const spanRef = useRef<HTMLSpanElement>(null)
    const location = useLocation()

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    useEffect(() => {
        setIsCartOpen(false)
    }, [location])

    const toggleDropdown = () => {
        setIsCartOpen(!isCartOpen)
    }

    useEffect(() => {
        if (spanRef.current) {
            spanRef.current.classList.add('animate-ping')
            const timeout = setTimeout(() => {
                spanRef.current?.classList.remove('animate-ping')
            }, 200)
            return () => clearTimeout(timeout)
        }
    }, [cartCount])

    const itemClassName = cartCount ? 'text-orange-400' : ''

    return (
        <ShoppingCartContainer>
            <ShoppingIcon onClick={toggleDropdown} />
            <div>
                <span className={`${itemClassName}`} ref={spanRef}>
                    {cartCount}
                </span>
            </div>
        </ShoppingCartContainer>
    )
}
