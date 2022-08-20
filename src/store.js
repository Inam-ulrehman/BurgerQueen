import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'
import contactSlice from './features/contact/contactSlice'
import productSlice from './features/products/productSlice'
import reviewSlice from './features/reviews/reviewSlice'
import userProfileSlice from './features/user/userProfileSlice'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    userProfile: userProfileSlice,
    product: productSlice,
    contact: contactSlice,
    review: reviewSlice,
    cart: cartSlice,
  },
})

export default store
