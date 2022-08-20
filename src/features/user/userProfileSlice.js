import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
// import axios from 'axios'

const initialState = {
  name: '',
  lastName: '',
  dateOfBirth: '',
  mobile: '',
  house: '',
  street: '',
  town: '',
  province: '',
  country: '',
  isMember: true,
  isLoading: false,
  isEditing: false,
}

// get Login User

export const getLoginUserThunk = createAsyncThunk(
  'user/getLoginUserThunk',
  async (_, thunkAPI) => {
    //   try {
    //     const response = await axios.get(
    //       'http://localhost:5000/api/v1/profiles',
    //       {}
    //     )
    //     return { ...response.data }
    //   } catch (error) {
    //     return thunkAPI.rejectWithValue(error.response.data.msg)
    //   }
  }
)

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {},
    getUserProfile: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
  },

  extraReducers: {
    [getLoginUserThunk.pending]: (state, payload) => {
      state.isLoading = true
    },
    [getLoginUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
    },
    [getLoginUserThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload, {
        position: 'top-center',
      })
    },
  },
})

export const { createFunction, getUserProfile } = userProfileSlice.actions
export default userProfileSlice.reducer
