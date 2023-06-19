import { ChangeEvent, createContext, useContext } from 'react'

type TAdminPanelService = {
  data: any
  error: any
  isLoading: boolean
  status: string
  isError: boolean
  currentPage: number
  itemsPerPage: number
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
  handlePageClick: (page: number) => void
}

export const AdminPanelServiceContext = createContext<TAdminPanelService>({
  data: undefined,
  error: null,
  isLoading: false,
  status: '',
  isError: false,
  currentPage: 0,
  itemsPerPage: 0,
  handleOnChange: () => {},
  handlePageClick: () => {},
})

export const useAdminPanelServiceContext = () => {
  return useContext(AdminPanelServiceContext)
}
