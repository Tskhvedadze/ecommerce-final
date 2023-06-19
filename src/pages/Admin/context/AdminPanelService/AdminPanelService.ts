import { Dispatch, SetStateAction, createContext, useContext } from 'react'

type TAdminPanelService = {
  data: any
  isLoading: boolean
  status: string
  isError: boolean
  error: any
  setSearchKeyword: Dispatch<SetStateAction<string>>
  setCurrentPage: Dispatch<SetStateAction<number>>
  currentPage: number
  itemsPerPage: number
  handlePageClick: (page: number) => void
}

export const AdminPanelServiceContext = createContext<TAdminPanelService>({
  data: undefined,
  isLoading: false,
  status: '',
  isError: false,
  error: null,
  setSearchKeyword: () => {},
  setCurrentPage: () => {},
  currentPage: 0,
  itemsPerPage: 0,
  handlePageClick: () => {},
})

export const useAdminPanelServiceContext = () => {
  return useContext(AdminPanelServiceContext)
}
