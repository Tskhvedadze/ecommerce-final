import { useCallback, useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'
import { Pagination, Select } from 'antd'
import { getAllProducts, filteredOptions } from 'utils'
import { ProductCard, BreadcrumbComponent } from 'components'
import {
    OuterContainer,
    InnerContainer,
    FilterContainer,
    ResultsContainer,
    ProductCardContainer,
    NoItemFound,
} from './Products.styled'
import { TProducts } from 'types/productsAPI.types'

function ProductsPage() {
    const { t } = useTranslation(['ProductsPage'])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [brandName, setBrandName] = useState<string>('Samsung')

    const itemsPerPage = 12
    const skip = (currentPage - 1) * itemsPerPage

    const { data, refetch } = useQuery(
        ['allProducts', currentPage, brandName],
        () => getAllProducts(itemsPerPage, skip, brandName),
    )

    useEffect(() => {
        refetch()
    }, [currentPage, brandName, refetch])

    const handlePageClick = useCallback((page: number) => {
        setCurrentPage(page)
    }, [])

    const handleBrandChange = useCallback((value: string) => {
        setBrandName(value)
        setCurrentPage(1)
    }, [])

    const getSelectOptions = useMemo(
        () => filteredOptions(brandName),
        [brandName],
    )

    return (
        <OuterContainer>
            <InnerContainer>
                <FilterContainer>
                    <h1>{t('filter')}</h1>
                    <Select
                        defaultValue='Samsung'
                        value={brandName}
                        showSearch
                        size='large'
                        onChange={handleBrandChange}
                        style={{ width: '17rem' }}
                        options={getSelectOptions.map((item) => ({
                            value: item,
                            label: item,
                        }))}
                    />
                    <BreadcrumbComponent />
                </FilterContainer>
                <ResultsContainer>
                    {data?.products.length === 0 ? (
                        <NoItemFound>
                            No '{brandName}' found. Please go to the previous
                            page or select another brand.
                        </NoItemFound>
                    ) : (
                        <ProductCardContainer>
                            {data?.products.map(
                                ({
                                    id,
                                    images,
                                    price,
                                    brand,
                                    title,
                                }: TProducts) => (
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
                    )}

                    <Pagination
                        className='mb-4 md:mb-0 border-b p-2 w-full text-center'
                        showSizeChanger={false}
                        showQuickJumper
                        current={currentPage}
                        defaultCurrent={1}
                        total={data.total_found}
                        onChange={handlePageClick}
                    />
                </ResultsContainer>
            </InnerContainer>
        </OuterContainer>
    )
}

export default ProductsPage
