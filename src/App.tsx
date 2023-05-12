import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { PaginationProvider } from 'pages/HomePage/context'

const HomePage = lazy(() => import('pages/HomePage'))

function App() {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <PaginationProvider>
                        <HomePage />
                    </PaginationProvider>
                }
            />
        </Routes>
    )
}

export default App
