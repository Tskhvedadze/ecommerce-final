import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoadingSpiner } from 'components'

const PrivateRoutes = lazy(() => import('routes/Private/PrivateRoutes'))
const PublicRoutes = lazy(() => import('routes/Public/PublicRoutes'))

const MainLayout = lazy(() => import('layout/MainLayout'))
const SecondaryLayout = lazy(() => import('secondaryLayout/SecondaryLayout'))

const Profile = lazy(() => import('pages/User'))
const Home = lazy(() => import('pages/Home'))
const Products = lazy(() => import('pages/Products'))
const SingleProduct = lazy(() => import('pages/SingleProduct'))
const Contact = lazy(() => import('pages/Contact'))
const Search = lazy(() => import('pages/Search'))
const SignUp = lazy(() => import('pages/SignUp'))
const SignIn = lazy(() => import('pages/SignIn'))

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
                </Route>

                <Route element={<PublicRoutes />}>
                    <Route element={<SecondaryLayout />}>
                        <Route path='SignUp' element={<SignUp />} />
                        <Route path='SignIn' element={<SignIn />} />
                    </Route>
                </Route>

                <Route element={<PrivateRoutes />}>
                    <Route element={<SecondaryLayout />}>
                        <Route path='profile' element={<Profile />} />
                    </Route>
                </Route>

                <Route path='/*' element={<Navigate to='/' replace />} />
            </Routes>
        </Suspense>
    )
}

export default App
