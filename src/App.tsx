import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { LoadingSpiner } from 'components'

const MainLayout = lazy(() => import('layout/MainLayout'))
const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const SingleProductPage = lazy(
    () => import('pages/SingleProductPage/SingleProductPage'),
)
const EditProductPage = lazy(
    () => import('pages/EditProductPage/EditProductPage'),
)
const ProductsPage = lazy(() => import('pages/ProductsPage/ProductsPage'))
const ContactPage = lazy(() => import('pages/ContactPage/ContactPage'))

const App = () => {
    return (
        <>
            <Suspense fallback={<LoadingSpiner />}>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/products' element={<ProductsPage />} />
                        <Route
                            path='/products/:title/:itemID'
                            element={<SingleProductPage />}
                        />

                        <Route
                            path='/product/:id/edit'
                            element={<EditProductPage />}
                        />
                    </Route>
                    <Route path='/contact-us' element={<ContactPage />} />
                </Routes>
            </Suspense>
        </>
    )
}

export default App
