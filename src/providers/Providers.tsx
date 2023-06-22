import { PropsWithChildren } from 'react'
import { QueryClient } from 'react-query'
import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from '@material-tailwind/react'

import { ContactFormProvider } from './ContactFormProvider/ContactFormProvider'
import { CartProvider } from './CartProvider/CartProvider'
import { SearchBarProvider } from './SearchBarProvider/SearchBarProvider'
import { AuthProvider } from './authProvider/authProvider'
import { RoleProvider } from './RoleProvider/RoleProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 600000,
      useErrorBoundary: (error: any) => error.response?.status >= 500,
    },
  },
})

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ContactFormProvider>
          <CartProvider>
            <SearchBarProvider>
              <RoleProvider>
                <ThemeProvider>{children}</ThemeProvider>
              </RoleProvider>
            </SearchBarProvider>
          </CartProvider>
        </ContactFormProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default Providers
