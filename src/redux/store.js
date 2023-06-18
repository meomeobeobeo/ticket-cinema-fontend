import {configureStore} from '@reduxjs/toolkit'
import {authSlice} from './authSlice'
import { filmsSlice } from './FilmsSlice'
import { bookingSlice } from './BookingSlice'
const store = configureStore({

    reducer: {
       
        auth : authSlice.reducer,
        films : filmsSlice.reducer,
        booking : bookingSlice.reducer
    }
})
export default store
