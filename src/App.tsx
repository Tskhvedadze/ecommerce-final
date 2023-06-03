import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { LoadingSpiner } from 'components'

const Main = lazy(() => import('layout/MainLayout'))
const Contact = lazy(() => import('pages/ContactPage'))
const EditProduct = lazy(() => import('pages/EditProductPage'))
const Home = lazy(() => import('pages/HomePage'))
const Products = lazy(() => import('pages/ProductsPage'))
const SingleProduct = lazy(() => import('pages/SingleProductPage'))

const App = () => {
    return (
        <Suspense fallback={<LoadingSpiner />}>
            <Routes>
                <Route element={<Main />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route
                        path='/products/:itemID'
                        element={<SingleProduct />}
                    />

                    <Route path='/product/:id/edit' element={<EditProduct />} />
                </Route>
                <Route path='/contact-us' element={<Contact />} />
            </Routes>
        </Suspense>
    )
}

export default App
