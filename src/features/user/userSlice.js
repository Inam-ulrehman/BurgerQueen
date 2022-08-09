import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetchUser } from '../../utils/axios'
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  setUserInLocalStorage,
} from '../../utils/localStorage'
const localUser = getUserFromLocalStorage()

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  isLoading: false,
  user: localUser || [],
}

// Creating Api just using user name instead of api

export const userLoginThunk = createAsyncThunk(
  'user/userLoginThunk',
  async (user, thunkAPI) => {
    const { email, password, name } = user

    try {
      const response = await customFetchUser.post('/login', {
        email,
        password,
        name,
      })

      return { ...response.data }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

// Register user
export const userRegisterThunk = createAsyncThunk(
  'user/userRegisterThunk',
  async (user, thunkAPI) => {
    const { email, password, name } = user

    try {
      const response = await customFetchUser.post('/Register', {
        email,
        password,
        name,
      })

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {},
    toggleMember: (state) => {
      state.isMember = !state.isMember
    },
    getUserFormInput: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
    logeOutUser: (state) => {
      removeUserFromLocalStorage()
      window.location.reload(false)
    },
  },

  extraReducers: {
    [userLoginThunk.pending]: (state, payload) => {
      state.isLoading = true
    },
    [userLoginThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      const { token, user } = payload
      const member = { ...user, token }
      setUserInLocalStorage(member)
      state.user = member
      toast.success(`${user.name}, Welcome back `, {
        position: 'top-center',
      })
    },
    [userLoginThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload, {
        position: 'top-center',
      })
    },
    [userRegisterThunk.pending]: (state, payload) => {
      state.isLoading = true
    },
    [userRegisterThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      const { token, user } = payload
      const member = { ...user, token }
      setUserInLocalStorage(member)
      state.user = member
      toast.success(`${user.name}, hello there. `, {
        position: 'top-center',
      })
    },
    [userRegisterThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload, {
        position: 'top-center',
      })
    },
  },
})

export const { createFunction, toggleMember, getUserFormInput, logeOutUser } =
  userSlice.actions
export default userSlice.reducer
