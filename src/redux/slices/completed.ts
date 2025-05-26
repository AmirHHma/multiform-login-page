import { createSlice } from "@reduxjs/toolkit";

let initialValue={value:[false,false,false]}

let ifCompleted=createSlice({
    name:'ifCompleted',
    initialState:initialValue,
    reducers:{
        completed:(state,payload)=>{
            state.value=payload.payload
        },
        notComplete:(state,payload)=>{
            state.value=payload.payload
        }
    }

})

export const {completed,notComplete}=ifCompleted.actions
export default ifCompleted.reducer