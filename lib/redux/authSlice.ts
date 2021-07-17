import { createSlice } from '@reduxjs/toolkit'
import { authState, user } from '@type/authSliceState'
import { RootState } from '@lib/redux/store'

//define initial state
const initialState: authState = {
  user: null,
  jwtToken: null,
  refreshToken: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload
    },
    updateJwtToken: (state, action) => {
      state.jwtToken = action.payload
    },
    updateRefreshToken: (state, action) => {
      state.refreshToken = action.payload
    }
  }
})

//actions
export const { updateUser, updateJwtToken, updateRefreshToken } = authSlice.actions

//selectors
export const selectUser = (state: RootState): user | null => state.auth.user
export const selectJwtToken = (state: RootState): string | null => state.auth.jwtToken
export const selectRefreshToken = (state: RootState): string | null => state.auth.refreshToken

export default authSlice.reducer
