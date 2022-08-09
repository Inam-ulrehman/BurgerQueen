import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'
import contactSlice from './features/contact/contactSlice'
import orderSlice from './features/order/orderSlice'
import productsSlice from './features/products/productsSlice'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
    cart: cartSlice,
    order: orderSlice,
    contact: contactSlice,
  },
})

export default store
