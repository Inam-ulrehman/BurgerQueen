import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customFetchProducts from '../../utils/axios'

const initialState = {
  products: [],
  isLoading: false,
}

export const getAllProductsThunk = createAsyncThunk(
  'product/getAllProductsThunk',
  async (_, thunkAPI) => {
    try {
      const resp = await customFetchProducts.get()
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {},
  },

  extraReducers: {
    [getAllProductsThunk.pending]: (state) => {
      state.isLoading = true
    },
    [getAllProductsThunk.fulfilled]: (state, { payload }) => {
      const { products } = payload
      state.products = products
      state.isLoading = false
    },
    [getAllProductsThunk.rejected]: (state) => {
      state.isLoading = false
    },
  },
})
// ================ All actions starts here =============
export const { createFunction } = productSlice.actions

export default productSlice.reducer
