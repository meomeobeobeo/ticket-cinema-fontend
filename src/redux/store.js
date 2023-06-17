import {configureStore} from '@reduxjs/toolkit'
import {authSlice} from './authSlice'
import { filmsSlice } from './FilmsSlice'
const store = configureStore({

    reducer: {
       
        auth : authSlice.reducer,
        films : filmsSlice.reducer
    }
})
export default store
