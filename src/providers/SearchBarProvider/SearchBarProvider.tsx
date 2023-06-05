import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SearchBarContext } from 'context'

export const SearchBarProvider = ({ children }: PropsWithChildren) => {
    const [text, setText] = useState<string>('')
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState(false)
    const resultsRef = useRef<HTMLDivElement>(null)
    const location = useLocation()

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

    useEffect(() => {
        setText('') // Clear text field input on location change
    }, [location, setText])

    return (
        <SearchBarContext.Provider
            value={{
                text,
                setText,
                isFocused,
                setIsFocused,
                resultsRef,
                modalOpen,
                setModalOpen,
            }}
        >
            {children}
        </SearchBarContext.Provider>
    )
}
