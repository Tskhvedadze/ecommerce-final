import { PropsWithChildren, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SearchBarContext } from 'context'

export const SearchBarProvider = ({ children }: PropsWithChildren) => {
    const [text, setText] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setIsFocused(false)
        setText('') // Clear text field input on location change
    }, [location, setText])

    return (
        <SearchBarContext.Provider
            value={{
                text,
                setText,
                isFocused,
                setIsFocused,
                modalOpen,
                setModalOpen,
            }}
        >
            {children}
        </SearchBarContext.Provider>
    )
}
