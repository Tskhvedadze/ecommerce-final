import { PropsWithChildren } from 'react'
import { ContactFormProvider } from './ContactFormProvider/ContactFormProvider'
import { ShoppingCartProvider } from './ShoppingCartProvider/ShoppingCartProvider'

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <>
            <ContactFormProvider>
                <ShoppingCartProvider>{children}</ShoppingCartProvider>
            </ContactFormProvider>
        </>
    )
}
