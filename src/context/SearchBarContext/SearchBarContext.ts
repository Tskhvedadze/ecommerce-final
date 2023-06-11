import { createContext, useContext } from 'react'

type TSearchBarContext = {
    text: string
    setText: (text: string) => void
    isFocused: boolean
    setIsFocused: (isFocused: boolean) => void
    modalOpen: boolean
    setModalOpen: (modal: boolean) => void
}

export const SearchBarContext = createContext<TSearchBarContext>({
    text: '',
    setText: () => {},
    isFocused: false,
    setIsFocused: () => {},
    modalOpen: false,
    setModalOpen: () => {},
})

export const useSearchBarContext = () => {
    return useContext(SearchBarContext)
}
