import { configureStore } from "@reduxjs/toolkit"
import payingMethod from './slices/payingMethod'
import stepChanger from "./slices/stepChanger";
import overallSummer from './slices/overallSummer'
import completetion from './slices/completed'
let store=configureStore({
    reducer:{
        setMethod:payingMethod,
        overallSummer:overallSummer,
        checkCompletion:completetion,
    }
})

export default store;
export type RootState=ReturnType<typeof store.getState>