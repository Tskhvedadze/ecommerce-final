import { PropsWithChildren } from 'react'
import { ContactFormProvider } from './ContactFormProvider/ContactFormProvider'
import { CartProvider } from './CartProvider/CartProvider'

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <>
            <ContactFormProvider>
                <CartProvider>{children}</CartProvider>
            </ContactFormProvider>
        </>
    )
}
