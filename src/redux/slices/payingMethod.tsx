import { createSlice } from "@reduxjs/toolkit";
type value={
    value:boolean
}

let initalValue:value={ 
    value:false
}

const setPayingMethod=createSlice({
    name:'setMethod',
    initialState:initalValue,
    reducers:{
        setPaymentMethod:(state)=>{
            state.value=!state.value;
        },
        setMonthly:(state)=>{
            state.value=false
        },
        setYearly:(state)=>{
            state.value=true
        }
        
    }
})

export const {setPaymentMethod,setMonthly,setYearly} =   setPayingMethod.actions
export default setPayingMethod.reducer