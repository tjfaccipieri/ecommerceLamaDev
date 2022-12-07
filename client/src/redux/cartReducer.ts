import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: []
}

export const cartSlice: any = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: any, action) => {
      const item = state.products.find((item: any) => item.id === action.payload.id)
      if(item){
        item.quantity += action.payload.quantity
      } else {
        state.products.push(action.payload)
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter((item: any) => item.id !== action.payload)
    },
    resetCart: (state) => {
      state.products = []
    }
  }
})

export const {addToCart, removeItem, resetCart} = cartSlice.actions

export default cartSlice.reducer