import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  stars: '',
  reviewInput: '',
  reviews: [],
  isLoading: false,
}

export const postReviewThunk = createAsyncThunk(
  'reviews/postReviewThunk',
  async (review, thunkAPI) => {
    console.log(review)
    // try {
    //   const resp = await customFetchReview.post('reviews',review)
    //   return resp.data
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error.response.data)
    // }
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
  },
})

export const { createFunction, getReviewsInput } = reviewSlice.actions

export default reviewSlice.reducer
