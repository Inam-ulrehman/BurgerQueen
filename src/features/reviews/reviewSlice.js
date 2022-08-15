import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { customFetchReview } from '../../utils/axios'

const initialState = {
  name: '',
  stars: '',
  reviewInput: '',
  reviews: [],
  total: '',
  isLoading: false,
}
//==================== Post Reviews ============
export const postReviewThunk = createAsyncThunk(
  'reviews/postReviewThunk',
  async (review, thunkAPI) => {
    console.log(review)
    try {
      const resp = await customFetchReview.post('reviews', review)
      console.log(resp.data)
      return resp.data
    } catch (error) {
      console.log(error.response)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

// ================Get Review=====================
export const getReviewThunk = createAsyncThunk(
  'reviews/getReviewThunk',
  async (id, thunkAPI) => {
    const item = id
    const product = item
    JSON.stringify(product)
    try {
      const resp = await customFetchReview.post('reviews/all', {
        product,
      })
      console.log(resp.data)
      return resp.data
    } catch (error) {
      console.log(error.response)
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {},
    getReviewsInput: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
  },
  extraReducers: {
    [postReviewThunk.pending]: (state) => {
      state.isLoading = true
    },
    [postReviewThunk.fulfilled]: (state) => {
      state.isLoading = false
    },
    [postReviewThunk.rejected]: (state) => {
      state.isLoading = true
    },
    [getReviewThunk.pending]: (state) => {
      state.isLoading = true
    },
    [getReviewThunk.fulfilled]: (state, { payload }) => {
      const { count, reviews } = payload
      state.total = count
      state.reviews = reviews
      state.isLoading = false
    },
    [getReviewThunk.rejected]: (state) => {
      state.isLoading = true
    },
  },
})

export const { createFunction, getReviewsInput } = reviewSlice.actions

export default reviewSlice.reducer
