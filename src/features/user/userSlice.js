import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { BASE_PATH } from '../../utils/constants'

export const userSlice = createSlice({
    name: "user",
    initialState : {},
    reducers: {
        login: (state, action) => { 
            state.id = action.payload.id
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.image = action.payload.image
            state.roleId = action.payload.roleId
            state.token = action.payload.token
        }, 
        logout: (state) => {
            delete state.id
            delete state.email
            delete state.firstName
            delete state.lastName
            delete state.image
            delete state.roleId
            delete state.token
        },
        refresh: (state, action) => {
                    state.id = action.payload.id
                    state.email = action.payload.email
                    state.firstName = action.payload.firstName
                    state.lastName = action.payload.lastName
                    state.image = action.payload.image
                    state.roleId = action.roleId
            }
        }
        
    }
)

export const { login, logout, refresh } = userSlice.actions
export default userSlice.reducer