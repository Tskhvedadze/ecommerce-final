import { useContext, useCallback, useRef, useEffect, useState } from 'react'
import { ShoppingCartContext } from 'context'
import { ShoppingCartContainer, ShoppingIcon } from './ShoppingCart.styled'

type ShoppingCartProps = {}

export const ShoppingCart: React.FC<ShoppingCartProps> = () => {
    const spanRef = useRef<HTMLSpanElement>(null)
    const [animate, setAnimate] = useState<boolean>(false)

    const { isCartOpen, setIsCartOpen, cartCount } =
        useContext(ShoppingCartContext)

    const toggleDropdown = useCallback(() => {
        setIsCartOpen(!isCartOpen)
    }, [setIsCartOpen, isCartOpen])

    useEffect(() => {
        if (spanRef.current) {
            setAnimate(true)
            const timeout = setTimeout(() => {
                setAnimate(false)
            }, 200)
            return () => clearTimeout(timeout)
        }
    }, [cartCount])

    const itemClassName = cartCount ? 'text-orange-400' : ''
    const animateClassName = animate ? 'animate-ping text-orange-500' : ''

    return (
        <ShoppingCartContainer>
            <ShoppingIcon onClick={toggleDropdown} />
            <div>
                <span
                    className={`${itemClassName} ${animateClassName}`}
                    ref={spanRef}
                >
                    {cartCount}
                </span>
            </div>
        </ShoppingCartContainer>
    )
}
