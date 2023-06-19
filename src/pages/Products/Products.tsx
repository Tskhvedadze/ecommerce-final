import { useCallback, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { animateScroll } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { Pagination, Select } from 'antd'

import { public_axios } from 'utils'
import { filteredOptions } from './util/productsUtils/productsUtils'
import { ProductCard, BreadcrumbComponent, ErrorMsg } from 'components'
import { TProducts } from 'types/productsAPI.types'

import {
  OuterContainer,
  InnerContainer,
  FilterContainer,
  ResultsContainer,
  ProductCardContainer,
} from './Products.styled'

function Products() {
  const { t } = useTranslation(['ProductsPage'])
  const [brandName, setBrandName] = useState<string>('Amazon')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const skip = (currentPage - 1) * itemsPerPage

  const { data, error, isFetching } = useQuery({
    queryKey: ['allProducts', brandName, currentPage, skip],
    queryFn: async () => {
      const res = await public_axios.post('/products', {
        keyword: brandName,
        page_size: itemsPerPage,
        page_number: skip,
      })
      return res?.data
    },
    useErrorBoundary: (error: any) => error.response?.status >= 500,
  })

  const handlePageClick = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  const handleBrandChange = useCallback((value: string) => {
    setBrandName(value)
    setCurrentPage(1)
  }, [])

  useEffect(() => {
    if (!isFetching) {
      animateScroll.scrollToTop({
        duration: 1100,
        smooth: 'easeInOutQuad',
      })
    }
  }, [isFetching, currentPage])

  if (error?.message) {
    return <ErrorMsg errorText={error?.message} />
  }

  return (
    <OuterContainer>
      <InnerContainer>
        <FilterContainer>
          <h1>{t('filter')}</h1>
          <Select
            defaultValue={brandName}
            value={brandName}
            showSearch
            size='large'
            onChange={handleBrandChange}
            style={{ width: '17rem' }}
            options={filteredOptions(brandName).map((item) => ({
              value: item,
              label: item,
            }))}
          />
          <BreadcrumbComponent title={brandName} />
        </FilterContainer>
        <ResultsContainer>
          <ProductCardContainer>
            {data?.products.map(
              ({ id, images, price, brand, title }: TProducts) => (
                <ProductCard
                  key={id}
                  id={id}
                  brand={brand}
                  images={images}
                  price={price}
                  title={title}
                />
              ),
            )}
          </ProductCardContainer>
        </ResultsContainer>
      </InnerContainer>
      <div className='flex w-full justify-center mb-6 mt-4 border-b pb-3'>
        <Pagination
          showSizeChanger={false}
          showQuickJumper
          current={currentPage}
          defaultPageSize={itemsPerPage}
          total={data?.total_found}
          onChange={handlePageClick}
        />
      </div>
    </OuterContainer>
  )
}

export default Products
