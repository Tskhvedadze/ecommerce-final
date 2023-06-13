import { useCartContext } from 'context'
import { TShoppingCart } from 'types/shoppingCart.types'
import { CartItemLists } from './components/CartItemLists'

export const CheckoutContent = () => {
    const { cartItems } = useCartContext()

    return (
        <div className='col-span-full flex flex-col px-4 lg:col-span-4 pt-4 pb-20 w-full rounded-lg bg-amazonclone-background'>
            <div>
                <ul className='space-y-5 h-[40vh]  overflow-auto pb-2'>
                    {cartItems.map((items: TShoppingCart) => (
                        <CartItemLists key={items.id} {...items} />
                    ))}
                </ul>
                <div className='space-y-2 '>
                    <p className='flex justify-between text-lg font-bold text-gray-700'>
                        <span>Total price:</span>
                        <span className=' text-green-400'>$510.00</span>
                    </p>
                </div>
            </div>
            <div className=' mt-8 text-gray-700'>
                <p className='flex flex-col'>
                    <span className='text-sm font-bold text-gray-700'>
                        Money Back Guarantee
                    </span>
                    <span className='text-xs font-medium text-gray-700'>
                        within 30 days of purchase
                    </span>
                </p>
            </div>
        </div>
    )
}
