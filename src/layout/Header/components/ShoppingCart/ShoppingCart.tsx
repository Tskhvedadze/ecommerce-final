import { ShoppingCartContainer, ShoppingIcon } from './ShoppingCart.styled'

type ShoppingCartProps = {}

export const ShoppingCart = (props: ShoppingCartProps) => {
    return (
        <ShoppingCartContainer>
            <ShoppingIcon onClick={() => console.log('cart')} />
            <div>
                <span>3</span>
            </div>
        </ShoppingCartContainer>
    )
}
