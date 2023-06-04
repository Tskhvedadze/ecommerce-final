import { createContext, useContext } from 'react'

type TSearchBarContext = {
    text: string
    setText: (text: string) => void
    isFocused: boolean
    setIsFocused: (isFocused: boolean) => void
    resultsRef: React.RefObject<HTMLDivElement> | null
}

export const SearchBarContext = createContext({} as TSearchBarContext)

// CustomHook
export const useSearchBarContext = () => {
    return useContext(SearchBarContext)
}
