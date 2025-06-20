// import { createSlice } from "@reduxjs/toolkit";


const intialstate = {
    user: {
        username : 'tushar'
       , email: 'tushar@gmail.com'
,        password : 'password'
    }
}

const userReducer = (state = intialstate )=>{
    return state;
}



export default userReducer;