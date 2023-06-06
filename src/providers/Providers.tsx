import { QueryClient } from 'react-query'
import { QueryClientProvider } from 'react-query'

import { PropsWithChildren } from 'react'
import { ContactFormProvider } from './ContactFormProvider/ContactFormProvider'
import { CartProvider } from './CartProvider/CartProvider'
import { SearchBarProvider } from './SearchBarProvider/SearchBarProvider'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 6000,
            useErrorBoundary: (error: any) => error.response?.status >= 500,
        },
    },
})

const Providers = ({ children }: PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ContactFormProvider>
                <CartProvider>
                    <SearchBarProvider>{children}</SearchBarProvider>
                </CartProvider>
            </ContactFormProvider>
        </QueryClientProvider>
    )
}

export default Providers
