import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useSearchBarContext } from 'context'
import { useTranslation } from 'react-i18next'
import { SearchErrorModal, SearchResult } from './components'

import { apiClient2 } from 'config/api/api'
import { TProducts } from 'types/productsAPI.types'

import {
    SearchContainer,
    MainContainer,
    InputContainer,
    SearchIcon,
    ResultsContainer,
    EmptyResultContainer,
    EmptyText,
    EmptySpan,
    ErrorText,
} from './SearchBar.styled'

export const SearchBar = () => {
    const navigate = useNavigate()
    const { t } = useTranslation(['components'])
    const { text, setText, setIsFocused, isFocused, resultsRef, setModalOpen } =
        useSearchBarContext()
    const trimmedText = text.trim()

    const {
        status,
        data,
        error,
        isError,
    }: { status: string; data: any; error: any; isError: boolean } = useQuery(
        ['searchProducts', text],
        async () => {
            const res = await apiClient2.get(`products/search?q=${trimmedText}`)
            return res?.data
        },
        {
            suspense: false,
            cacheTime: 0,
        },
    )

    const handleSearchResultRedirect = () => {
        if (trimmedText.length === 0) {
            setModalOpen(true)
        } else {
            navigate(`/search-result/${trimmedText}`)
        }
    }

    const renderSearchResults = () => {
        if (
            trimmedText.length === 0 ||
            isError ||
            data?.products.length === 0
        ) {
            return (
                <EmptyResultContainer>
                    {status === 'error' && isError ? (
                        <ErrorText>An Error: {error.message}</ErrorText>
                    ) : (
                        <EmptyText>
                            {t('found')}
                            <EmptySpan>
                                {t('for')} <span>{text}</span>
                            </EmptySpan>
                        </EmptyText>
                    )}
                </EmptyResultContainer>
            )
        }

        return data?.products.map(({ id, title, price, images }: TProducts) => (
            <SearchResult
                key={id}
                id={id}
                images={images[0]}
                price={price}
                title={title}
            />
        ))
    }

    return (
        <SearchContainer>
            <MainContainer>
                <InputContainer>
                    <input
                        placeholder={`${t('search')}`}
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                    />
                    <button onClick={handleSearchResultRedirect}>
                        <SearchIcon />
                    </button>
                    <SearchErrorModal />
                </InputContainer>
                {isFocused && (
                    <ResultsContainer ref={resultsRef}>
                        {renderSearchResults()}
                    </ResultsContainer>
                )}
            </MainContainer>
        </SearchContainer>
    )
}
