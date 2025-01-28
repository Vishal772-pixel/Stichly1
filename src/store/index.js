import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
})

// Ye hai hamara main Redux store
// Isme do reducers hain - products aur cart
// Yahan se poore app mein data flow control hoga

