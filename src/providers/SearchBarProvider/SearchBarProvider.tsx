import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { SearchBarContext } from 'context'

export const SearchBarProvider = ({ children }: PropsWithChildren) => {
    const [text, setText] = useState<string>('')
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const resultsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                resultsRef.current &&
                !resultsRef.current.contains(event.target as Node)
            ) {
                setIsFocused(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [setIsFocused])

    return (
        <SearchBarContext.Provider
            value={{
                text,
                setText,
                isFocused,
                setIsFocused,
                resultsRef,
            }}
        >
            {children}
        </SearchBarContext.Provider>
    )
}
