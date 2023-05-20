import { Button } from '..'
import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
} from './ShoppingCartDropdown.styled'

type ShoppingCartDropdownProps = {}

export const ShoppingCartDropdown = (props: ShoppingCartDropdownProps) => {
    return (
        <CartDropdownContainer>
            <CartItems>
                <EmptyMessage></EmptyMessage>
            </CartItems>
            <Button mode='secondary' className='m-auto mt-6'>
                Go To Checkout
            </Button>
        </CartDropdownContainer>
    )
}
