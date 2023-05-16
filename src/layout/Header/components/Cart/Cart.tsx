import { SCartContainer, SCartIcon } from './Cart.styled'

type CartProps = {}

export const Cart = (props: CartProps) => {
    return (
        <SCartContainer>
            <SCartIcon onClick={() => console.log('cart')} />
            <div>
                <span>3</span>
            </div>
        </SCartContainer>
    )
}
