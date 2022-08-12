import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from './components/ProtectedRoute'
import { getAllProductsThunk } from './features/products/productSlice'
import {
  SharedLayout,
  LandingPage,
  ErrorPage,
  Contact,
  ProductsSharedLayout,
  Products,
  SingleProducts,
  TypeProducts,
  Reviews,
  User,
  Cart,
} from './pages'
import {
  Dashboard,
  Orders,
  Payment,
  Profile,
  SharedDashboardLayout,
} from './pages/Dashboard'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProductsThunk())
    // eslint-disable-next-line
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='contact' element={<Contact />} />
          <Route path='user' element={<User />} />
          <Route path='cart' element={<Cart />} />
          <Route path='/products' element={<ProductsSharedLayout />}>
            <Route index element={<Products />} />
            <Route path='/products/:type' element={<TypeProducts />} />
            <Route
              path='/products/:type/:singleProduct'
              element={<SingleProducts />}
            />
            <Route
              path='/products/:type/:singleProduct/:reviews'
              element={<Reviews />}
            />
          </Route>
        </Route>
        {/* Dashboard Route start here */}
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <SharedDashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path='orders' element={<Orders />} />
          <Route path='profile' element={<Profile />} />
          <Route path='payment' element={<Payment />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
