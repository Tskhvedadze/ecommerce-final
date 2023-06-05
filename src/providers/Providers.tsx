import { PropsWithChildren } from 'react'
import { ContactFormProvider } from './ContactFormProvider/ContactFormProvider'
import { CartProvider } from './CartProvider/CartProvider'
import { SearchBarProvider } from './SearchBarProvider/SearchBarProvider'

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <>
            <ContactFormProvider>
                <CartProvider>
                    <SearchBarProvider>{children}</SearchBarProvider>
                </CartProvider>
            </ContactFormProvider>
        </>
    )
}
