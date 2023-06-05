import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetch } from 'hook'
import { useSearchBarContext } from 'context'
import { useTranslation } from 'react-i18next'
import { SearchErrorModal, SearchResult } from './components'

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

export const SearchBar = () => {
    const navigate = useNavigate()
    const { t } = useTranslation(['components'])
    const {
        text,
        setText,
        setIsFocused,
        isFocused,
        resultsRef,
        modalOpen,
        setModalOpen,
    } = useSearchBarContext()
    const trimmedText = text.trim()

    const { data, refetch } = useFetch({
        url: `products/search?q=${trimmedText}`,
        caching: ['searchProducts'],
    })

    useEffect(() => {
        refetch()
    }, [text, refetch])

    const handleSearchResultRedirect = () => {
        if (trimmedText.length === 0) {
            setModalOpen(true)
        } else {
            navigate(`/search-result/${trimmedText}`)
        }
    }

    const renderSearchResults = () => {
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
