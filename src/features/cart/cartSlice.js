import { createSlice } from '@reduxjs/toolkit'
import { formatPrice } from '../../utils/helper'
import {
  getCartFromLocalStorage,
  setCartInLocalStorage,
} from '../../utils/localStorage'

const initialState = {
  name: '',
  cartItem: 0,
  cart: getCartFromLocalStorage() || [],
  total: 0,
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
    increaseItemAmount: (state, { payload }) => {
      const { id } = payload
      const findSingleObject = state.cart.find((item) => item._id === id)

      if (findSingleObject.total === 10) {
        // max limit is 10
        return
      }
      findSingleObject.total = findSingleObject.total + 1
      setCartInLocalStorage(state.cart)
    },
    decreaseItemAmount: (state, { payload }) => {
      const { id } = payload
      const findSingleObject = state.cart.find((item) => item._id === id)
      if (findSingleObject.total === 1) {
        // minimum limit is 1
        return
      }
      findSingleObject.total = findSingleObject.total - 1
      setCartInLocalStorage(state.cart)
    },
    emptyCart: (state, { payload }) => {
      state.cart = []
      setCartInLocalStorage(state.cart)
    },
    calculateTotal: (state, { payload }) => {
      let amount = 0
      let total = 0
      state.cart.forEach((item) => {
        amount += item.total
        total += item.price * item.total
        return
      })
      state.cartItem = amount
      state.total = formatPrice(total)
    },
  },
})

export const {
  createFunction,
  getCartItems,
  removeCartItem,
  increaseItemAmount,
  decreaseItemAmount,
  emptyCart,
  calculateTotal,
} = cartSlice.actions
export default cartSlice.reducer
