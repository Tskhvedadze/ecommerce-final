import { PropsWithChildren } from 'react'
import { AdminPanelServiceProvider } from './AdminPanelService/AdminPanelServiceProvider'
import { CreateProductProvider } from './CreateProduct/CreateProduct'

export const AdminProviders = ({ children }: PropsWithChildren) => {
  return (
    <AdminPanelServiceProvider>
      <CreateProductProvider>{children}</CreateProductProvider>
    </AdminPanelServiceProvider>
  )
}
