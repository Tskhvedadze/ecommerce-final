import { ChangeEvent, useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'
import { public_axios } from 'utils'
import { TProducts } from 'types/productsAPI.types'
import { ProductsList } from './components'

import {
  CreateBtn,
  FlexContainer,
  Header,
  Input,
  UL,
  ErrorMsg,
  Spinner,
  StyledPagination,
} from './AdminPanel.styled'

function AdminPanel() {
  const { t } = useTranslation(['Admin'])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchKeyword, setSearchKeyword] = useState('')
  const itemsPerPage = 25
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

  if (status === 'error' && isError)
    return <ErrorMsg>{error?.message}</ErrorMsg>

  return (
    <FlexContainer>
      <Header>
        <div>
          <Input
            type='text'
            placeholder={`${t('search')}`}
            onChange={handleOnChange}
          />
        </div>
        <CreateBtn>{t('create')}</CreateBtn>
      </Header>
      <UL>
        {isLoading ? (
          <Spinner size='large' />
        ) : (
          data?.products.map((product: TProducts) => (
            <ProductsList key={product.id} {...product} />
          ))
        )}
      </UL>
      <StyledPagination
        showSizeChanger={false}
        showQuickJumper
        current={currentPage}
        defaultPageSize={itemsPerPage}
        total={data?.total_found}
        onChange={handlePageClick}
      />
    </FlexContainer>
  )
}

export default AdminPanel
