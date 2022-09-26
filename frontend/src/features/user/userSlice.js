import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Update user profile
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({userID, userData}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      console.log('userID ===> ', userID)
      console.log('newUserDetails ===> ', userData)
      return await userService.update(userID, userData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      console.log('ERROR ===>', message);
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      console.log('RESET USER SLICE');  
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        console.log('===> UPDATE USER PENDING');
        state.isLoading = true
    })
    .addCase(updateUser.fulfilled, (state, action) => {
        console.log('===> UPDATE USER FULFILLED');
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
    })
    .addCase(updateUser.rejected, (state, action) => {
        console.log('===> UPDATE USER REJECTED');
        console.log('===> state', state);
        console.log('===> action', action);
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
  },
})

export const { reset } = userSlice.actions
export default userSlice.reducer
