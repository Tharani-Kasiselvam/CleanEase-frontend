import {configureStore} from '@reduxjs/toolkit'
import cartCounterReducer from '../features/cartCounterSlice'

export default configureStore({
    reducer : {
        cleanServiceCounter : cartCounterReducer
    }
})