import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('pages/HomePage'))
const MainLayout = lazy(() => import('layout/MainLayout'))

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default App
