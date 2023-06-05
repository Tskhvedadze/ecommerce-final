import { createContext, useContext } from 'react'

type TSearchBarContext = {
    text: string
    setText: (text: string) => void
    isFocused: boolean
    setIsFocused: (isFocused: boolean) => void
    resultsRef: React.RefObject<HTMLDivElement> | null
    modalOpen: boolean
    setModalOpen: (modal: boolean) => void
}

export const SearchBarContext = createContext({} as TSearchBarContext)

export const useSearchBarContext = () => {
    return useContext(SearchBarContext)
}
