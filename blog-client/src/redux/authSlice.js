import { createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice({

    name: 'auth',
    initialState: {
        user: null,
        token: null
    },
    reducers: {
        updateAuth: (state, action) => {

            state.user = action.payload.user
            state.token = action.payload.token
        }
    }

})

export const { updateAuth } = authSlice.actions
export default authSlice.reducer