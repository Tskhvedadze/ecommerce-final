import { PropsWithChildren } from 'react'
import { ContactFormProvider } from './ContactFormProvider/ContactFormProvider'

export const Providers = ({ children }: PropsWithChildren) => {
    return <ContactFormProvider>{children}</ContactFormProvider>
}
