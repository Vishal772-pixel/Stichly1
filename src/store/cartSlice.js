import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Simulating API calls
const addToCartAPI = (item) => new Promise((resolve) => setTimeout(() => resolve(item), 500))
const removeFromCartAPI = (id) => new Promise((resolve) => setTimeout(() => resolve(id), 500))
const updateQuantityAPI = (id, quantity) => new Promise((resolve) => setTimeout(() => resolve({ id, quantity }), 500))

export const addToCartAsync = createAsyncThunk("cart/addToCartAsync", async (item) => {
  const response = await addToCartAPI(item)
  return response
})

export const removeFromCartAsync = createAsyncThunk("cart/removeFromCartAsync", async (id) => {
  await removeFromCartAPI(id)
  return id
})

export const updateQuantityAsync = createAsyncThunk("cart/updateQuantityAsync", async ({ id, quantity }) => {
  const response = await updateQuantityAPI(id, quantity)
  return response
})

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state, action) => {
        const item = action.meta.arg
        const existingItem = state.items.find((i) => i.id === item.id)
        if (existingItem) {
          existingItem.quantity += 1
        } else {
          state.items.push({ ...item, quantity: 1 })
        }
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        // The optimistic update is already done in pending
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        // Revert the optimistic update
        const item = action.meta.arg
        const index = state.items.findIndex((i) => i.id === item.id)
        if (index !== -1) {
          if (state.items[index].quantity > 1) {
            state.items[index].quantity -= 1
          } else {
            state.items.splice(index, 1)
          }
        }
        state.error = action.error.message
      })
      .addCase(removeFromCartAsync.pending, (state, action) => {
        const id = action.meta.arg
        state.items = state.items.filter((item) => item.id !== id)
      })
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        // The optimistic update is already done in pending
      })
      .addCase(removeFromCartAsync.rejected, (state, action) => {
        // Revert the optimistic update
        state.items.push(action.meta.arg)
        state.error = action.error.message
      })
      .addCase(updateQuantityAsync.pending, (state, action) => {
        const { id, quantity } = action.meta.arg
        const item = state.items.find((i) => i.id === id)
        if (item) {
          item.quantity = quantity
        }
      })
      .addCase(updateQuantityAsync.fulfilled, (state, action) => {
        // The optimistic update is already done in pending
      })
      .addCase(updateQuantityAsync.rejected, (state, action) => {
        // Revert the optimistic update
        const { id, quantity } = action.meta.arg
        const item = state.items.find((i) => i.id === id)
        if (item) {
          item.quantity = quantity
        }
        state.error = action.error.message
      })
  },
})

export const selectCartItems = (state) => state.cart.items
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
export const selectCartItemsCount = (state) => state.cart.items.reduce((count, item) => count + item.quantity, 0)

export default cartSlice.reducer

