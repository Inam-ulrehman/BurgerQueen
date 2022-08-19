import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getCartFromLocalStorage,
  setCartInLocalStorage,
  removeCartFromLocalStorage,
  setCashOrderInLocalStorage,
  getCashOrderFromLocalStorage,
} from '../../utils/localStorage'
import axios from 'axios'
import { toast } from 'react-toastify'

// getCashOrderFromLocalStorage() ||getCashOrderFromLocalStorage() ||
const initialState = {
  name: '',
  cashOrderId: '',
  payCash: getCashOrderFromLocalStorage() || [],
  cartItem: 0,
  cart: getCartFromLocalStorage() || [],
  total: 0,
  isLoading: false,
}

// Sent Order to CashOrder BackEnd....
export const postCashOrderThunk = createAsyncThunk(
  'cart/postCashOrderThunk',
  async (order, thunkApi) => {
    console.log(order)
    try {
      const response = await axios.post(
        'https://burgerqueenbyinam.herokuapp.com/api/v1/cashorders',
        order
      )
      console.log(response.data)
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data)
    }
  }
)

// Sent Order to OnlineOrder BackEnd....
export const postOnlineOrderThunk = createAsyncThunk(
  'cart/postOnlineOrderThunk',
  async (paymentDetails, thunkAPI) => {
    console.log(paymentDetails)

    try {
      const token = thunkAPI.getState().user.user.token
      const name = thunkAPI.getState().user.user.name
      const cart = thunkAPI.getState().cart.cart
      const total = thunkAPI.getState().cart.total
      console.log(total)
      const response = await axios.post(
        'https://burgerqueenbyinam.herokuapp.com/api/v1/stripes',
        { name, total, cart, paymentDetails },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log(response.data)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

// Get Order from OnlineOrder BackEnd....
export const getallOnlineOrderThunk = createAsyncThunk(
  'cart/getallOnlineOrderThunk',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token

      const response = await axios.get(
        'https://burgerqueenbyinam.herokuapp.com/api/v1/stripes',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log(response.data)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {},
    removeCart: (state, { payload }) => {
      state.cart = []
      setCartInLocalStorage(state.cart)
    },
    getCartItems: (state, { payload }) => {
      const payLoadId = payload[0]._id
      let total = { total: 1 }
      let product = payload.find((item) => item)
      product = [{ ...product, ...total }]

      if (state.cart.find((item) => item._id === payLoadId)) {
        return
      } else {
        state.cart = [...state.cart, ...product]
        setCartInLocalStorage(state.cart)
        return
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
    calculateTotal: (state, { payload }) => {
      let amount = 0
      let total = 0
      state.cart.forEach((item) => {
        amount += item.total
        total += item.price * item.total
        return
      })
      state.cartItem = amount
      state.total = total
    },
    payInCash: (state, { payload }) => {
      removeCartFromLocalStorage()
      state.cart = []
    },
    getUserNameCashPayment: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
  },
  extraReducers: {
    [postCashOrderThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [postCashOrderThunk.fulfilled]: (state, { payload }) => {
      const { name, payCash, _id } = payload.cashOrder
      console.log(payCash)
      state.name = name
      state.cashOrderId = _id
      state.payCash = payCash
      setCashOrderInLocalStorage(state.payCash)
      state.isLoading = false
    },
    [postCashOrderThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    // =========OnlineOrder========
    [postOnlineOrderThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [postOnlineOrderThunk.fulfilled]: (state, { payload }) => {
      state.cart = []
      setCartInLocalStorage(state.cart)
      state.isLoading = false
    },
    [postOnlineOrderThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    // =========OnlineOrder========
    [getallOnlineOrderThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [getallOnlineOrderThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
    },
    [getallOnlineOrderThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
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
  payInCash,
  getUserNameCashPayment,
  removeCart,
} = cartSlice.actions
export default cartSlice.reducer
