import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'
import contactSlice from './features/contact/contactSlice'
import productSlice from './features/products/productSlice'
import reviewSlice from './features/reviews/reviewSlice'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    contact: contactSlice,
    review: reviewSlice,
    cart: cartSlice,
  },
})

export default store
