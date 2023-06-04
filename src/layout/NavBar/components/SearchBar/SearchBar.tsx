import { useEffect } from 'react'
import { useSearchBarContext } from 'context'
import { useFetch } from 'hook'
import { useTranslation } from 'react-i18next'

import {
    SearchContainer,
    MainContainer,
    InputContainer,
    SearchIcon,
    ResultsContainer,
    EmptyResultContainer,
    EmptyText,
    EmptySpan,
} from './SearchBar.styled'
import { TProducts } from 'types/productsAPI.types'
import { SearchResult } from './components/SearchResult'

export const SearchBar = () => {
    const { t } = useTranslation(['components'])
    const { text, setText, setIsFocused, isFocused, resultsRef } =
        useSearchBarContext()

    const { data, refetch } = useFetch({
        url: `products/search?q=${text.trim()}`,
        caching: ['searchProducts'],
    })

    useEffect(() => {
        refetch()
    }, [text, refetch])

    const renderSearchResults = () => {
        const trimmedText = text.trim()

        if (trimmedText.length === 0 || !data || data?.products.length === 0) {
            return (
                <EmptyResultContainer>
                    <EmptyText>
                        {t('found')}
                        <EmptySpan>
                            {t('for')} <span>{text}</span>
                        </EmptySpan>
                    </EmptyText>
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
                    <button>
                        <SearchIcon />
                    </button>
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
