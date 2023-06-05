/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react'
import { useCartContext } from 'context'
import { useLocation } from 'react-router-dom'

import { ShoppingCartContainer, ShoppingIcon } from './Cart.styled'

export const Cart: React.FC = () => {
    const spanRef = useRef<HTMLSpanElement>(null)
    const location = useLocation()

    const { setIsCartOpen, isCartOpen, cartCount } = useCartContext()

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
