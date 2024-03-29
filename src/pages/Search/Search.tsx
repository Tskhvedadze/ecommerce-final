import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useInfiniteQuery } from 'react-query'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTranslation } from 'react-i18next'
import { Breadcrumb, FloatButton, ConfigProvider } from 'antd'

import { public_axios } from 'utils'
import { TProducts } from 'types/productsAPI.types'
import { ErrorMsg, ProductCard } from 'components'

import {
  MainFlexContainer,
  InnerHeaderFlexContainer,
  SearchResultTitle,
  SearchResultParagraph,
  SearchedProductsGridContainer,
  NoMoreResult,
  Loading,
} from './Search.styled'

function Search() {
  const { t } = useTranslation(['search'])
  const { keyword } = useParams()
  const [totalFound, setTotalFound] = useState<string | undefined>(undefined)

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    status,
    error,
    isError,
  } = useInfiniteQuery({
    queryKey: ['searchResults', keyword],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await public_axios.post('/products', {
        keyword: keyword,
        page_size: 10,
        page_number: pageParam,
      })
      return { ...res?.data, prevOffset: pageParam }
    },
    useErrorBoundary: (error: any) => error.response?.status >= 500,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 10 > lastPage?.total_found) {
        return false
      }
      return lastPage.prevOffset + 10
    },
  })

  const products = data?.pages.reduce((acc, page) => {
    return [...acc, page.products]
  }, [])

  useEffect(() => {
    const totalFound = data?.pages.map((items) => items.total_found).join()
    setTotalFound(totalFound)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const breadcrumbItems = [
    {
      className: 'text-gray-700 font-semibold',
      title: `${t('home')}`,
      href: '/',
    },
    {
      className: 'text-orange',
      title: keyword,
    },
  ]

  if (status === 'error' && isError) {
    return <ErrorMsg key='errorMsg' errorText={error.message} />
  }

  return (
    <MainFlexContainer>
      <InnerHeaderFlexContainer>
        <div>
          <SearchResultTitle>{t('search')}</SearchResultTitle>
          <SearchResultParagraph>
            {t('found')} {totalFound} {t('product')}
            <span>{keyword}</span>
          </SearchResultParagraph>
        </div>
        <Breadcrumb separator='>' items={breadcrumbItems} />
      </InnerHeaderFlexContainer>
      <InfiniteScroll
        dataLength={products ? products.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage ?? false}
        loader={<Loading>{t('loading')}</Loading>}
        endMessage={<NoMoreResult>{t('nomore')}</NoMoreResult>}
      >
        <SearchedProductsGridContainer>
          {isSuccess &&
            data?.pages?.map((page) =>
              page.products.map(
                ({ id, price, brand, images, title }: TProducts) => (
                  <ProductCard
                    key={id}
                    id={id}
                    brand={brand}
                    images={images}
                    price={price}
                    title={title}
                  />
                ),
              ),
            )}
        </SearchedProductsGridContainer>
      </InfiniteScroll>
      <ConfigProvider
        theme={{
          token: {
            controlHeightLG: 55,
            colorBgElevated: '#FEBD69',
            colorFillContent: '#f4d2aa',
            fontSizeIcon: 18,
            colorText: '#fff',
          },
        }}
      >
        <FloatButton.BackTop />
      </ConfigProvider>
    </MainFlexContainer>
  )
}

export default Search
