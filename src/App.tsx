import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/HomePage'))

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    )
}

export default App
