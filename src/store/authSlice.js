import { createSlice } from "@reduxjs/toolkit";

let authSlice=createSlice({
    name:"auth",
    initialState:{
        status:false,
        userData:null
    },
    reducers:{
        login:(state,action)=>{
            state.status=true,
            state.userData=action.payload
        },
        logout:(state,action)=>{
            state.status=false,
            state.userData=null
        }
    }
})

let authReducer=authSlice.reducer

export default authReducer

export let {login,logout}=authSlice.actions