import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const fetchProductsAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
          title: "Basic White Tee",
          price: 19.99,
          category: "women",
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format",
          title: "Beige Jacket",
          price: 49.99,
          category: "women",
        },
        {
          id: 3,
          image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=500&auto=format",
          title: "Yellow Sweater",
          price: 29.99,
          category: "women",
        },
        {
          id: 4,
          image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format",
          title: "Pink Tee",
          price: 24.99,
          category: "women",
        },
        {
          id: 5,
          image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format",
          title: "Black Tee",
          price: 19.99,
          category: "men",
        },
        {
          id: 6,
          image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format",
          title: "Sport Wear",
          price: 39.99,
          category: "men",
        },
        {
          id: 7,
          image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format",
          title: "Basic Black",
          price: 24.99,
          category: "men",
        },
        {
          id: 8,
          image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format",
          title: "Summer Tee",
          price: 29.99,
          category: "men",
        },
      ])
    }, 1000)
  })
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetchProductsAPI()
  return response
})

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export default productsSlice.reducer