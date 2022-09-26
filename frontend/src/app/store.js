import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    user: userReducer,
  },
})
