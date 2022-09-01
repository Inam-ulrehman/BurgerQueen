import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from 'axios'

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

// Get Order from OnlineOrder BackEnd....
export const getLoginUserThunk = createAsyncThunk(
  'cart/getLoginUserThunk',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token

      const response = await axios.get(
        'https://burgerqueenbyinam.herokuapp.com/api/v1/profiles',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

// post Order from OnlineOrder BackEnd....
export const postLoginUserThunk = createAsyncThunk(
  'cart/postLoginUserThunk',
  async (profile, thunkAPI) => {
    console.log({ profile })
    try {
      const token = thunkAPI.getState().user.user.token
      const response = await axios.post(
        'https://burgerqueenbyinam.herokuapp.com/api/v1/profiles',
        profile,
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
    //  =============GetLoginUser =================

    [getLoginUserThunk.pending]: (state, payload) => {
      state.isLoading = true
    },
    [getLoginUserThunk.fulfilled]: (state, { payload }) => {
      if (payload.profiles.length > 0) {
        // Customer can update profile but we keep old data as well for record....

        const profile = payload.profiles.reverse()[0]
        state.name = profile.name
        state.lastName = profile.lastName
        state.dateOfBirth = profile.dateOfBirth
        state.mobile = profile.mobile
        state.house = profile.house
        state.street = profile.street
        state.town = profile.town
        state.province = profile.province
        state.country = profile.country
        state.isLoading = false
        return
      }
      state.isLoading = false
      return
    },
    [getLoginUserThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload, {
        position: 'top-center',
      })
    },
    //  =============Post and update LoginUser =================

    [postLoginUserThunk.pending]: (state, payload) => {
      state.isLoading = true
    },
    [postLoginUserThunk.fulfilled]: (state, { payload }) => {
      // Customer can update profile but we keep old data as well for record....
      console.log(payload)

      state.isLoading = false
    },
    [postLoginUserThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload, {
        position: 'top-center',
      })
    },
  },
})

export const { createFunction, getUserProfile } = userProfileSlice.actions
export default userProfileSlice.reducer
