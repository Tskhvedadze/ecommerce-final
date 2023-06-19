import { ChangeEvent, PropsWithChildren, useCallback, useState } from 'react'
import { AdminPanelServiceContext } from 'pages/Admin/context'
import { useQuery } from 'react-query'
import { public_axios } from 'utils'

export const AdminPanelServiceProvider = ({ children }: PropsWithChildren) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchKeyword, setSearchKeyword] = useState('')
  const itemsPerPage = 20
  const skip = (currentPage - 1) * itemsPerPage

  const handlePageClick = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
    setCurrentPage(1)
  }, [])

  const { status, data, error, isError, isLoading } = useQuery({
    queryKey: ['adminPanel', currentPage, skip, searchKeyword],
    queryFn: async () => {
      const res = await public_axios.post('/products', {
        keyword: searchKeyword,
        page_size: itemsPerPage,
        page_number: skip,
      })
      return res?.data
    },
    suspense: false,
    useErrorBoundary: (error: any) => error.response?.status >= 500,
  })

  const adminPanelServiceContextValue = {
    data,
    error,
    isLoading,
    isError,
    status,
    currentPage,
    itemsPerPage,
    handleOnChange,
    handlePageClick,
  }

  return (
    <AdminPanelServiceContext.Provider value={adminPanelServiceContextValue}>
      {children}
    </AdminPanelServiceContext.Provider>
  )
}
