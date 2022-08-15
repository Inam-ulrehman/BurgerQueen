import { createSlice } from '@reduxjs/toolkit'
import {
  getCartFromLocalStorage,
  setCartInLocalStorage,
} from '../../utils/localStorage'

const initialState = {
  name: '',
  cartItem: 1,
  cart: getCartFromLocalStorage() || [],
  isLoading: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {},
    getCartItems: (state, { payload }) => {
      const payLoadId = payload[0]._id
      let total = { total: 1 }
      let product = payload.find((item) => item)
      product = [{ ...product, ...total }]
      console.log(product)
      if (state.cart.find((item) => item._id === payLoadId)) {
        return console.log('id match')
      } else {
        state.cart = [...state.cart, ...product]
        setCartInLocalStorage(state.cart)
        return console.log('id not matching')
      }
    },
    removeCartItem: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item._id !== payload)
      setCartInLocalStorage(state.cart)
    },
    increaseItemAmount: (state, { payload }) => {},
  },
})

export const {
  createFunction,
  getCartItems,
  removeCartItem,
  increaseItemAmount,
} = cartSlice.actions
export default cartSlice.reducer
