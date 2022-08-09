import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetchContact } from '../../utils/axios'

const initialState = {
  name: '',
  lastName: '',
  email: '',
  message: '',
  details: '',
  isLoading: false,
}

export const contactThunk = createAsyncThunk(
  'contact/contactThunk',
  async (contact, thunkAPI) => {
    try {
      const response = await customFetchContact.post('/contacts', contact)

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
      state.message = ''
      state.details = ''
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
