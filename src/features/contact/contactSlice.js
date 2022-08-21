import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
  name: '',
  lastName: '',
  email: '',
  mobile: '',
  message: '',
  details: '',
  isLoading: false,
}
export const contactThunk = createAsyncThunk(
  'contact/contactThunk',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://burgerqueenbyinam.herokuapp.com/api/v1/contactus',
        contact
      )
      return { ...response.data }
    } catch (error) {
      console.log(error.response)
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {},
    getContactDetails: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
  },

  extraReducers: {
    [contactThunk.pending]: (state, payload) => {
      state.isLoading = true
    },
    [contactThunk.fulfilled]: (state, { payload }) => {
      state.name = ''
      state.email = ''
      state.lastName = ''
      state.mobile = ''
      state.message = ''
      state.details = ''
      toast.success('Your request is received will be in touch soon.')
      state.isLoading = false
    },
    [contactThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload, {
        position: 'top-center',
      })
    },
  },
})

export const { createFunction, getContactDetails } = contactSlice.actions
export default contactSlice.reducer
