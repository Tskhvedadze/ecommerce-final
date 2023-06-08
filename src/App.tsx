import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { LoadingSpiner } from 'components'

const MainLayout = lazy(() => import('layout/MainLayout'))
const Home = lazy(() => import('pages/HomePage'))
const Products = lazy(() => import('pages/ProductsPage'))
const SingleProduct = lazy(() => import('pages/SingleProductPage'))

const SecondaryLayout = lazy(() => import('secondaryLayout/SecondaryLayout'))
const Contact = lazy(() => import('pages/ContactPage'))
const Search = lazy(() => import('pages/SearchPage'))
const SignIn = lazy(() => import('pages/auth/SignIn/SignIn'))
const SignUp = lazy(() => import('pages/auth/SignUp/SignUp'))

const App = () => {
    return (
        <Suspense fallback={<LoadingSpiner />}>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route
                        path='products/:itemID'
                        element={<SingleProduct />}
                    />
                </Route>
                <Route element={<SecondaryLayout />}>
                    <Route path='contact-us' element={<Contact />} />
                    <Route path='search-result/:keyword' element={<Search />} />
                    <Route path='/SignIn' element={<SignIn />} />
                    <Route path='/SignUp' element={<SignUp />} />
                    <Route />
                </Route>
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </Suspense>
    )
}

export default App
