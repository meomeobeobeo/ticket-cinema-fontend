import {createSlice} from "@reduxjs/toolkit";


export const filmsSlice = createSlice({
    name : 'films',

    initialState:{
        status : "idle",
        films :null
    },
    reducers:{
        saveFilmsState : (state, action) =>{
            state.films = action.payload
        }
    },
    extraReducers:(builder)=>{
        
           

        

    }


})
export const {saveFilmsState} = filmsSlice.actions