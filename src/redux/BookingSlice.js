import {createSlice} from "@reduxjs/toolkit";


export const bookingSlice = createSlice({
    name : 'booking',

    initialState: null,
    reducers:{
        setBookingData : (state, action) =>{
            state = action.payload
        }
    },
    extraReducers:(builder)=>{
        
           

        

    }


})
export const {setBookingData} = bookingSlice.actions