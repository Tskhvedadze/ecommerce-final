import { PropsWithChildren, useCallback, useState } from 'react'
import { AdminPanelServiceContext } from 'pages/Admin/context'
import { useQuery } from 'react-query'
import { public_axios } from 'utils'

export const AdminPanelServiceProvider = ({ children }: PropsWithChildren) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchKeyword, setSearchKeyword] = useState('')
  const itemsPerPage = 20
  const skip = (currentPage - 1) * itemsPerPage

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

  const handlePageClick = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  return (
    <AdminPanelServiceContext.Provider
      value={{
        data,
        isLoading,
        error,
        isError,
        status,
        setSearchKeyword,
        setCurrentPage,
        currentPage,
        itemsPerPage,
        handlePageClick,
      }}
    >
      {children}
    </AdminPanelServiceContext.Provider>
  )
}
