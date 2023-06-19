import { ChangeEvent } from 'react'
import { useAdminPanelServiceContext } from './context'
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
} from './Admin.styled'

function Admin() {
  const {
    data,
    error,
    status,
    isError,
    isLoading,
    currentPage,
    itemsPerPage,
    handlePageClick,
    setSearchKeyword,
    setCurrentPage,
  } = useAdminPanelServiceContext()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value)
    setCurrentPage(1)
  }

  if (status === 'error' && isError)
    return <ErrorMsg>{error?.message}</ErrorMsg>

  return (
    <FlexContainer>
      <Header>
        <div>
          <Input
            type='text'
            placeholder='Search products...'
            onChange={handleOnChange}
          />
        </div>
        <CreateBtn>Create product</CreateBtn>
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

export default Admin
