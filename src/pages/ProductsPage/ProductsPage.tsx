import { useCallback, useMemo, useState } from 'react'
import { useQuery } from 'react-query'

import { TProducts } from 'types/productsAPI.types'

import { Pagination, Select } from 'antd'

import {
    getAllProducts,
    getFilteredProducts,
    getDataSlice,
    filteredOptions,
} from 'utils'

import { ProductCard } from 'components'

import {
    OuterContainer,
    InnerContainer,
    FilterContainer,
    ResultsContainer,
    StyledSpin,
    ProductCardContainer,
    NoItemFound,
} from './Products.styled'

function ProductsPage() {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [brandName, setBrandName] = useState<string>('Samsung')

    const itemsPerPage = 12
    const skip = (currentPage - 1) * itemsPerPage

    const { data: allProducts } = useQuery(
        ['products'],
        () => getAllProducts(10000, 0, ''),
        {
            initialData: [],
        },
    )

    const filteredProducts = useMemo(
        () => getFilteredProducts(allProducts, brandName),
        [allProducts, brandName],
    )

    const data = useMemo(
        () => getDataSlice(filteredProducts, skip, itemsPerPage),
        [filteredProducts, skip, itemsPerPage],
    )

    const totalFound = filteredProducts?.length

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
                    <h1>Filter By Brand Names</h1>
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
                </FilterContainer>
                <ResultsContainer>
                    {data?.length === 0 ? (
                        <NoItemFound>
                            No '{brandName}' found. Please go to the previous
                            page or select another brand.
                        </NoItemFound>
                    ) : !filteredProducts ? (
                        <StyledSpin size='large' />
                    ) : (
                        <ProductCardContainer>
                            {data?.map(
                                ({ id, images, price, brand }: TProducts) => (
                                    <ProductCard
                                        id={id}
                                        key={id}
                                        brand={brand}
                                        images={images}
                                        price={price}
                                    />
                                ),
                            )}
                        </ProductCardContainer>
                    )}

                    <Pagination
                        className='mb-4 md:mb-0 border rounded-lg p-2'
                        showSizeChanger={false}
                        showQuickJumper
                        current={currentPage}
                        defaultCurrent={1}
                        total={totalFound}
                        onChange={handlePageClick}
                    />
                </ResultsContainer>
            </InnerContainer>
        </OuterContainer>
    )
}

export default ProductsPage
