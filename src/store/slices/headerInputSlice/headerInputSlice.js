import {createSlice} from "@reduxjs/toolkit";

export const headerInputSlice = createSlice({
    name: "homePageInputValue",
    initialState: "Yerevan",
    reducers: {
        getInputValue(state, {payload}){
            return payload
        }
    }
})

export const {getInputValue} =headerInputSlice.actions

export const headerInputReducer = headerInputSlice.reducer