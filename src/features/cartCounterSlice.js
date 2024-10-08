import {createSlice} from '@reduxjs/toolkit'

export const cartCounterSlice = createSlice({
    name : "cleanServiceCounter",
    
    initialState : {
        cartCount : 0,
        buttonTxt : "ADD"
    },

    reducers : {
        add : (state, action) => {
            state.cartCount += action.payload
        },
        minus : (state, action) => {
            if(state.cartCount>0){
                state.cartCount -= action.payload
            }
            else
                state.cartCount = 0
        },
        reset : state => {
            state.cartCount = 0
        },
        btnTxt : (state, action) => {
            state.buttonTxt = action.payload
        }
    }
})

export const {add, minus, reset} = cartCounterSlice.actions

export default cartCounterSlice.reducer

export const selectCartCount = state => state.cleanServiceCounter.cartCount