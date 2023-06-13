import { CheckoutContent, CheckoutForm } from './components'

type CheckoutProps = {}

function Checkout(props: CheckoutProps) {
    return (
        <div className='flex flex-col lg:flex-row  justify-evenly items-center w-full my-8'>
            <div className='w-[80%] lg:w-[30%]'>
                <CheckoutForm />
            </div>
            <div className='w-[80%] lg:w-[60%]'>
                <CheckoutContent />
            </div>
        </div>
    )
}

export default Checkout
