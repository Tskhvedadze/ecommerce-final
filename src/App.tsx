import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoadingSpiner } from 'components'
import { TUser_Roles } from 'types/user.types'

import Protected from 'routes'
import MainLayout from 'layout'
import SecondaryLayout from 'secondaryLayout'

const Home = lazy(() => import('pages/Home'))
const Contact = lazy(() => import('pages/Contact'))
const Products = lazy(() => import('pages/Products'))
const SingleProduct = lazy(() => import('pages/SingleProduct'))
const Search = lazy(() => import('pages/Search'))

const SignUp = lazy(() => import('pages/SignUp'))
const SignIn = lazy(() => import('pages/SignIn'))

const Settings = lazy(() => import('pages/User'))
const Checkout = lazy(() => import('pages/Checkout'))

const AdminPanel = lazy(() => import('pages/Admin/AdminPanel'))
const EditProducts = lazy(() => import('pages/Admin/EditProducts'))
const CreateProducts = lazy(() => import('pages/Admin/CreateProducts'))

const App = () => {
  return (
    <Suspense fallback={<LoadingSpiner />}>
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:itemID' element={<SingleProduct />} />
        </Route>
        <Route element={<SecondaryLayout />}>
          <Route path='contact-us' element={<Contact />} />
          <Route path='search-result/:keyword' element={<Search />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<Protected roles={[TUser_Roles.GUEST]} />}>
          <Route element={<SecondaryLayout />}>
            <Route path='SignUp' element={<SignUp />} />
            <Route path='SignIn' element={<SignIn />} />
          </Route>
        </Route>

        {/* User Pages */}
        <Route
          element={<Protected roles={[TUser_Roles.USER, TUser_Roles.ADMIN]} />}
        >
          <Route element={<SecondaryLayout />}>
            <Route path='settings' element={<Settings />} />
            <Route path='checkout' element={<Checkout />} />
          </Route>
        </Route>

        {/* Admin Panel */}
        <Route element={<Protected roles={[TUser_Roles.ADMIN]} />}>
          <Route element={<SecondaryLayout />}>
            <Route path='admin-panel' element={<AdminPanel />} />
            <Route path='admin-panel/edit/:editID' element={<EditProducts />} />
            <Route path='admin-panel/create' element={<CreateProducts />} />
          </Route>
        </Route>

        <Route path='/*' element={<Navigate to='/' replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
