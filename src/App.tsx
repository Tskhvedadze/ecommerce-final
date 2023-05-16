import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const MainLayout = lazy(() => import('layout/MainLayout'))
const ContactPage = lazy(() => import('pages/ContactPage/ContactPage'))

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<HomePage />} />
                </Route>
                <Route path='contact-us' element={<ContactPage />} />
            </Routes>
        </Suspense>
    )
}

export default App
