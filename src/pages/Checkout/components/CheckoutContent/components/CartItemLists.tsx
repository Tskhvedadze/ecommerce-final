import { useTranslation } from 'react-i18next'
import { formatCurrency } from 'utils'
import { TShoppingCart } from 'types/shoppingCart.types'

import {
    FlexDiv,
    List,
    Brand,
    Img,
    Price,
    Quantity,
    Remove,
    Add,
    QuantityDiv,
    Delete,
    Container,
} from './CartItemLists.styled'

type CartItemListsProps = {} & TShoppingCart

export const CartItemLists = ({
    images,
    brand,
    price,
    quantity,
}: CartItemListsProps) => {
    const { t } = useTranslation(['components'])

    return (
        <Container>
            <List>
                <FlexDiv>
                    <Img src={images[0]} alt={brand} />
                    <div className='ml-3'>
                        <Brand>{brand}</Brand>
                        <Price>{formatCurrency(price, t('currency'))}</Price>
                    </div>
                </FlexDiv>
                <QuantityDiv>
                    {/* <RemoveItem onClick={handleRemoveItem} /> */}
                    <Remove />
                    <Quantity>{quantity}</Quantity>
                    <Add />
                    {/* <AddItem onClick={handleAddItem} /> */}
                </QuantityDiv>
                {/* <DeleteIcon onClick={handleClearItem} /> */}
            </List>
            <Delete />
        </Container>
    )
}
