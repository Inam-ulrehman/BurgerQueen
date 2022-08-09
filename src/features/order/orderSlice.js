import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetchOrder } from '../../utils/axios'
import { removeCartFromLocalStorage } from '../../utils/localStorage'

const initialState = {
  firstName: '',
  lastName: '',
  house: '',
  street: '',
  town: '',
  province: '',
  country: '',
  card: '',
  exp: '',
  digit: '',
  mobile: '',
  email: '',
  orderList: [],
  isLoading: false,
  // Server data===
  count: 0,
  orderListServer: [],
  deleteReload: false,
}

// Post order on server

export const orderThunk = createAsyncThunk(
  'order/orderThunk',
  async (order, thunkAPI) => {
    console.log(order)
    console.log(thunkAPI.getState().user.user.token)
    try {
      const response = await customFetchOrder.post('/orders', order, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      console.log(response)
    } catch (error) {
      console.log(error.response)
    }
  }
)

// Get order from server ========

export const getOrderThunk = createAsyncThunk(
  'order/getOrderThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetchOrder.get('/orders', {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      // console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error.response)
    }
  }
)
// Delete order from server ========

export const DeleteOrderThunk = createAsyncThunk(
  'order/DeleteOrderThunk',
  async (id, thunkAPI) => {
    console.log(id)

    try {
      const response = await customFetchOrder.delete(`/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      console.log(thunkAPI.dispatch(getOrderThunk))
      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error.response)
    }
  }
)
//
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {},
    getPaymentValue: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
  },

  extraReducers: {
    [orderThunk.pending]: (state, payload) => {
      state.isLoading = true
    },
    [orderThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      // state.firstName = ''
      // state.lastName = ''
      // state.house = ''
      // state.street = ''
      // state.town = ''
      // state.province = ''
      // state.country = ''
      // state.card = ''
      // state.exp = ''
      // state.digit = ''
      // state.mobile = ''
      // state.email = ''
      toast.success('Thank you for your order.', {
        position: 'top-center',
      })
      state.cart = ''
      removeCartFromLocalStorage()
      // After payment clear state //
    },
    [orderThunk.rejected]: (state, { payload }) => {
      state.isLoading = true
      toast.error(payload, {
        position: 'top-center',
      })
    },
    [getOrderThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [getOrderThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.orderListServer = payload
    },
    [getOrderThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
    },
    [DeleteOrderThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [DeleteOrderThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.deleteReload = !state.deleteReload
    },
    [DeleteOrderThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
    },
  },
})

export const { createFunction, getPaymentValue } = orderSlice.actions
export default orderSlice.reducer
