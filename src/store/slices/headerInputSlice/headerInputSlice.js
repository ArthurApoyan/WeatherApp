import {createSlice} from "@reduxjs/toolkit";

export const headerInputSlice = createSlice({
    name: "homePageInputValue",
    initialState: "Yerevan",
    reducers: {
        getInputValue(state, {payload}){
            return payload
        },
        resetInput(state){
            return ""
        }
    }
})

export const selectHeaderInputValue = state => state.headerInputValue

export const {getInputValue, resetInput} =headerInputSlice.actions

export const headerInputReducer = headerInputSlice.reducer