import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { LoadingSpiner } from 'components'

const Main = lazy(() => import('layout/MainLayout'))

const Home = lazy(() => import('pages/HomePage'))
const Products = lazy(() => import('pages/ProductsPage'))
const SingleProduct = lazy(() => import('pages/SingleProductPage'))
const EditProduct = lazy(() => import('pages/EditProductPage'))

const Secondary = lazy(() => import('secondaryLayout/SecondaryLayout'))

const Contact = lazy(() => import('pages/ContactPage'))
const Search = lazy(() => import('pages/SearchPage'))

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
                <Route element={<Secondary />}>
                    <Route path='/contact-us' element={<Contact />} />
                    <Route
                        path='/search-result/:keyword'
                        element={<Search />}
                    />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default App
