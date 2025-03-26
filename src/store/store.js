import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

let store=configureStore({
    reducer:authReducer
})

export default store