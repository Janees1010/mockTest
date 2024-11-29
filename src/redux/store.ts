import { configureStore } from "@reduxjs/toolkit";
import { useDispatch,useSelector } from "react-redux";
import productSlice from "./slices/productSlice"

export const store = configureStore({
     reducer:{
       products:productSlice
     }
})


export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore["dispatch"]

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();